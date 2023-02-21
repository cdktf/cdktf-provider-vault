# `transformTransformation` Submodule <a name="`transformTransformation` Submodule" id="@cdktf/provider-vault.transformTransformation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformation <a name="TransformTransformation" id="@cdktf/provider-vault.transformTransformation.TransformTransformation"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation vault_transform_transformation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new TransformTransformation(Construct Scope, string Id, TransformTransformationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter">ResetMaskingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates">ResetTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource">ResetTweakSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaskingCharacter` <a name="ResetMaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter"></a>

```csharp
private void ResetMaskingCharacter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetTemplates` <a name="ResetTemplates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates"></a>

```csharp
private void ResetTemplates()
```

##### `ResetTweakSource` <a name="ResetTweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource"></a>

```csharp
private void ResetTweakSource()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTransformation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTransformation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

TransformTransformation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput">MaskingCharacterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput">TemplatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput">TweakSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed">DeletionAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter">MaskingCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates">Templates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource">TweakSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput"></a>

```csharp
public object DeletionAllowedInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingCharacterInput`<sup>Optional</sup> <a name="MaskingCharacterInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput"></a>

```csharp
public string MaskingCharacterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TemplatesInput`<sup>Optional</sup> <a name="TemplatesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput"></a>

```csharp
public string[] TemplatesInput { get; }
```

- *Type:* string[]

---

##### `TweakSourceInput`<sup>Optional</sup> <a name="TweakSourceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput"></a>

```csharp
public string TweakSourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed"></a>

```csharp
public object DeletionAllowed { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingCharacter`<sup>Required</sup> <a name="MaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter"></a>

```csharp
public string MaskingCharacter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates"></a>

```csharp
public string[] Templates { get; }
```

- *Type:* string[]

---

##### `TweakSource`<sup>Required</sup> <a name="TweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource"></a>

```csharp
public string TweakSource { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationConfig <a name="TransformTransformationConfig" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new TransformTransformationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Path,
    string[] AllowedRoles = null,
    object DeletionAllowed = null,
    string Id = null,
    string MaskingCharacter = null,
    string Namespace = null,
    string Template = null,
    string[] Templates = null,
    string TweakSource = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name">Name</a></code> | <code>string</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path">Path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>object</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter">MaskingCharacter</a></code> | <code>string</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template">Template</a></code> | <code>string</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates">Templates</a></code> | <code>string[]</code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource">TweakSource</a></code> | <code>string</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type">Type</a></code> | <code>string</code> | The type of transformation to perform. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#name TransformTransformation#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#path TransformTransformation#path}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed"></a>

```csharp
public object DeletionAllowed { get; set; }
```

- *Type:* object

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingCharacter`<sup>Optional</sup> <a name="MaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter"></a>

```csharp
public string MaskingCharacter { get; set; }
```

- *Type:* string

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#namespace TransformTransformation#namespace}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

The name of the template to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#template TransformTransformation#template}

---

##### `Templates`<sup>Optional</sup> <a name="Templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates"></a>

```csharp
public string[] Templates { get; set; }
```

- *Type:* string[]

Templates configured for transformation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#templates TransformTransformation#templates}

---

##### `TweakSource`<sup>Optional</sup> <a name="TweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource"></a>

```csharp
public string TweakSource { get; set; }
```

- *Type:* string

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of transformation to perform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#type TransformTransformation#type}

---



