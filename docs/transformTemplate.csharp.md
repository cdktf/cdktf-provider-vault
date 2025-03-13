# `transformTemplate` Submodule <a name="`transformTemplate` Submodule" id="@cdktf/provider-vault.transformTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTemplate <a name="TransformTemplate" id="@cdktf/provider-vault.transformTemplate.TransformTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template vault_transform_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new TransformTemplate(Construct Scope, string Id, TransformTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig">TransformTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig">TransformTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet">ResetAlphabet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats">ResetDecodeFormats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat">ResetEncodeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlphabet` <a name="ResetAlphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetAlphabet"></a>

```csharp
private void ResetAlphabet()
```

##### `ResetDecodeFormats` <a name="ResetDecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetDecodeFormats"></a>

```csharp
private void ResetDecodeFormats()
```

##### `ResetEncodeFormat` <a name="ResetEncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetEncodeFormat"></a>

```csharp
private void ResetEncodeFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TransformTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TransformTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TransformTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput">AlphabetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput">DecodeFormatsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput">EncodeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet">Alphabet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats">DecodeFormats</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat">EncodeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlphabetInput`<sup>Optional</sup> <a name="AlphabetInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabetInput"></a>

```csharp
public string AlphabetInput { get; }
```

- *Type:* string

---

##### `DecodeFormatsInput`<sup>Optional</sup> <a name="DecodeFormatsInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormatsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DecodeFormatsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncodeFormatInput`<sup>Optional</sup> <a name="EncodeFormatInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormatInput"></a>

```csharp
public string EncodeFormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Alphabet`<sup>Required</sup> <a name="Alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.alphabet"></a>

```csharp
public string Alphabet { get; }
```

- *Type:* string

---

##### `DecodeFormats`<sup>Required</sup> <a name="DecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.decodeFormats"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DecodeFormats { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncodeFormat`<sup>Required</sup> <a name="EncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.encodeFormat"></a>

```csharp
public string EncodeFormat { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.transformTemplate.TransformTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTemplateConfig <a name="TransformTemplateConfig" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new TransformTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Path,
    string Alphabet = null,
    System.Collections.Generic.IDictionary<string, string> DecodeFormats = null,
    string EncodeFormat = null,
    string Id = null,
    string Namespace = null,
    string Pattern = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the template. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path">Path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet">Alphabet</a></code> | <code>string</code> | The alphabet to use for this template. This is only used during FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats">DecodeFormats</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat">EncodeFormat</a></code> | <code>string</code> | The regular expression template used for encoding values. Only applicable to FPE transformations. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#id TransformTemplate#id}. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern">Pattern</a></code> | <code>string</code> | The pattern used for matching. Currently, only regular expression pattern is supported. |
| <code><a href="#@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type">Type</a></code> | <code>string</code> | The pattern type to use for match detection. Currently, only regex is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#name TransformTemplate#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#path TransformTemplate#path}

---

##### `Alphabet`<sup>Optional</sup> <a name="Alphabet" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.alphabet"></a>

```csharp
public string Alphabet { get; set; }
```

- *Type:* string

The alphabet to use for this template. This is only used during FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#alphabet TransformTemplate#alphabet}

---

##### `DecodeFormats`<sup>Optional</sup> <a name="DecodeFormats" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.decodeFormats"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DecodeFormats { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The map of regular expression templates used to customize decoded outputs. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#decode_formats TransformTemplate#decode_formats}

---

##### `EncodeFormat`<sup>Optional</sup> <a name="EncodeFormat" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.encodeFormat"></a>

```csharp
public string EncodeFormat { get; set; }
```

- *Type:* string

The regular expression template used for encoding values. Only applicable to FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#encode_format TransformTemplate#encode_format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#id TransformTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#namespace TransformTemplate#namespace}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern used for matching. Currently, only regular expression pattern is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#pattern TransformTemplate#pattern}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.transformTemplate.TransformTemplateConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The pattern type to use for match detection. Currently, only regex is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/transform_template#type TransformTemplate#type}

---



