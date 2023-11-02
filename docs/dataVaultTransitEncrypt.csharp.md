# `data_vault_transit_encrypt`

Refer to the Terraform Registory for docs: [`data_vault_transit_encrypt`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt).

# `dataVaultTransitEncrypt` Submodule <a name="`dataVaultTransitEncrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitEncrypt <a name="DataVaultTransitEncrypt" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt vault_transit_encrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitEncrypt(Construct Scope, string Id, DataVaultTransitEncryptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitEncrypt resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitEncrypt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitEncrypt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitEncrypt.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultTransitEncrypt.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultTransitEncrypt resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitEncrypt to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitEncrypt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitEncrypt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext">Ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput">KeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion">KeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext"></a>

```csharp
public string Ciphertext { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput"></a>

```csharp
public double KeyVersionInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion"></a>

```csharp
public double KeyVersion { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitEncryptConfig <a name="DataVaultTransitEncryptConfig" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultTransitEncryptConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string Key,
    string Plaintext,
    string Context = null,
    string Id = null,
    double KeyVersion = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend">Backend</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key">Key</a></code> | <code>string</code> | Name of the encryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext">Plaintext</a></code> | <code>string</code> | Map of strings read from Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context">Context</a></code> | <code>string</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion">KeyVersion</a></code> | <code>double</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion"></a>

```csharp
public double KeyVersion { get; set; }
```

- *Type:* double

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---



