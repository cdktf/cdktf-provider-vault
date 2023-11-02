# `data_vault_policy_document`

Refer to the Terraform Registory for docs: [`data_vault_policy_document`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document).

# `dataVaultPolicyDocument` Submodule <a name="`dataVaultPolicyDocument` Submodule" id="@cdktf/provider-vault.dataVaultPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPolicyDocument <a name="DataVaultPolicyDocument" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document vault_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocument(Construct Scope, string Id, DataVaultPolicyDocumentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig">DataVaultPolicyDocumentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig">DataVaultPolicyDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule"></a>

```csharp
private void ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPolicyDocument.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPolicyDocument.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPolicyDocument.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultPolicyDocument.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPolicyDocument to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl">Hcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Hcl`<sup>Required</sup> <a name="Hcl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl"></a>

```csharp
public string Hcl { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule"></a>

```csharp
public DataVaultPolicyDocumentRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPolicyDocumentConfig <a name="DataVaultPolicyDocumentConfig" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Namespace = null,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

### DataVaultPolicyDocumentRule <a name="DataVaultPolicyDocumentRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRule {
    string[] Capabilities,
    string Path,
    object AllowedParameter = null,
    object DeniedParameter = null,
    string Description = null,
    string MaxWrappingTtl = null,
    string MinWrappingTtl = null,
    string[] RequiredParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities">Capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter">AllowedParameter</a></code> | <code>object</code> | allowed_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter">DeniedParameter</a></code> | <code>object</code> | denied_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl">MaxWrappingTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl">MinWrappingTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters">RequiredParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}. |

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}.

---

##### `AllowedParameter`<sup>Optional</sup> <a name="AllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter"></a>

```csharp
public object AllowedParameter { get; set; }
```

- *Type:* object

allowed_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#allowed_parameter DataVaultPolicyDocument#allowed_parameter}

---

##### `DeniedParameter`<sup>Optional</sup> <a name="DeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter"></a>

```csharp
public object DeniedParameter { get; set; }
```

- *Type:* object

denied_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#denied_parameter DataVaultPolicyDocument#denied_parameter}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}.

---

##### `MaxWrappingTtl`<sup>Optional</sup> <a name="MaxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl"></a>

```csharp
public string MaxWrappingTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}.

---

##### `MinWrappingTtl`<sup>Optional</sup> <a name="MinWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl"></a>

```csharp
public string MinWrappingTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}.

---

##### `RequiredParameters`<sup>Optional</sup> <a name="RequiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters"></a>

```csharp
public string[] RequiredParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}.

---

### DataVaultPolicyDocumentRuleAllowedParameter <a name="DataVaultPolicyDocumentRuleAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleAllowedParameter {
    string Key,
    string[] Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value">Value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

### DataVaultPolicyDocumentRuleDeniedParameter <a name="DataVaultPolicyDocumentRuleDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleDeniedParameter {
    string Key,
    string[] Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value">Value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPolicyDocumentRuleAllowedParameterList <a name="DataVaultPolicyDocumentRuleAllowedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleAllowedParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get"></a>

```csharp
private DataVaultPolicyDocumentRuleAllowedParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataVaultPolicyDocumentRuleAllowedParameterOutputReference <a name="DataVaultPolicyDocumentRuleAllowedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleAllowedParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataVaultPolicyDocumentRuleDeniedParameterList <a name="DataVaultPolicyDocumentRuleDeniedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleDeniedParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get"></a>

```csharp
private DataVaultPolicyDocumentRuleDeniedParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataVaultPolicyDocumentRuleDeniedParameterOutputReference <a name="DataVaultPolicyDocumentRuleDeniedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleDeniedParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataVaultPolicyDocumentRuleList <a name="DataVaultPolicyDocumentRuleList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get"></a>

```csharp
private DataVaultPolicyDocumentRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataVaultPolicyDocumentRuleOutputReference <a name="DataVaultPolicyDocumentRuleOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultPolicyDocumentRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter">PutAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter">PutDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter">ResetAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter">ResetDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl">ResetMaxWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl">ResetMinWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters">ResetRequiredParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedParameter` <a name="PutAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter"></a>

```csharp
private void PutAllowedParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter.parameter.value"></a>

- *Type:* object

---

##### `PutDeniedParameter` <a name="PutDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter"></a>

```csharp
private void PutDeniedParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedParameter` <a name="ResetAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter"></a>

```csharp
private void ResetAllowedParameter()
```

##### `ResetDeniedParameter` <a name="ResetDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter"></a>

```csharp
private void ResetDeniedParameter()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMaxWrappingTtl` <a name="ResetMaxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl"></a>

```csharp
private void ResetMaxWrappingTtl()
```

##### `ResetMinWrappingTtl` <a name="ResetMinWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl"></a>

```csharp
private void ResetMinWrappingTtl()
```

##### `ResetRequiredParameters` <a name="ResetRequiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters"></a>

```csharp
private void ResetRequiredParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter">AllowedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter">DeniedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput">AllowedParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput">DeniedParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput">MaxWrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput">MinWrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput">RequiredParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl">MaxWrappingTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl">MinWrappingTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters">RequiredParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedParameter`<sup>Required</sup> <a name="AllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter"></a>

```csharp
public DataVaultPolicyDocumentRuleAllowedParameterList AllowedParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a>

---

##### `DeniedParameter`<sup>Required</sup> <a name="DeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter"></a>

```csharp
public DataVaultPolicyDocumentRuleDeniedParameterList DeniedParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a>

---

##### `AllowedParameterInput`<sup>Optional</sup> <a name="AllowedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput"></a>

```csharp
public object AllowedParameterInput { get; }
```

- *Type:* object

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `DeniedParameterInput`<sup>Optional</sup> <a name="DeniedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput"></a>

```csharp
public object DeniedParameterInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MaxWrappingTtlInput`<sup>Optional</sup> <a name="MaxWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput"></a>

```csharp
public string MaxWrappingTtlInput { get; }
```

- *Type:* string

---

##### `MinWrappingTtlInput`<sup>Optional</sup> <a name="MinWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput"></a>

```csharp
public string MinWrappingTtlInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequiredParametersInput`<sup>Optional</sup> <a name="RequiredParametersInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput"></a>

```csharp
public string[] RequiredParametersInput { get; }
```

- *Type:* string[]

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MaxWrappingTtl`<sup>Required</sup> <a name="MaxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl"></a>

```csharp
public string MaxWrappingTtl { get; }
```

- *Type:* string

---

##### `MinWrappingTtl`<sup>Required</sup> <a name="MinWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl"></a>

```csharp
public string MinWrappingTtl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequiredParameters`<sup>Required</sup> <a name="RequiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters"></a>

```csharp
public string[] RequiredParameters { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



