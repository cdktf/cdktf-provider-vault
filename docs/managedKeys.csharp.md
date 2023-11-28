# `managedKeys` Submodule <a name="`managedKeys` Submodule" id="@cdktf/provider-vault.managedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKeys <a name="ManagedKeys" id="@cdktf/provider-vault.managedKeys.ManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys vault_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeys(Construct Scope, string Id, ManagedKeysConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.managedKeys.ManagedKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig">ManagedKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs">PutPkcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs">ResetPkcs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.managedKeys.ManagedKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.managedKeys.ManagedKeys.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAws` <a name="PutAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws"></a>

```csharp
private void PutAws(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAws.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutPkcs` <a name="PutPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs"></a>

```csharp
private void PutPkcs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.managedKeys.ManagedKeys.putPkcs.parameter.value"></a>

- *Type:* object

---

##### `ResetAws` <a name="ResetAws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAws"></a>

```csharp
private void ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPkcs` <a name="ResetPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.resetPkcs"></a>

```csharp
private void ResetPkcs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ManagedKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ManagedKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ManagedKeys.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.managedKeys.ManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ManagedKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedKeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs">Pkcs</a></code> | <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput">AwsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput">PkcsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.aws"></a>

```csharp
public ManagedKeysAwsList Aws { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList">ManagedKeysAwsList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azure"></a>

```csharp
public ManagedKeysAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList">ManagedKeysAzureList</a>

---

##### `Pkcs`<sup>Required</sup> <a name="Pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcs"></a>

```csharp
public ManagedKeysPkcsList Pkcs { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList">ManagedKeysPkcsList</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.awsInput"></a>

```csharp
public object AwsInput { get; }
```

- *Type:* object

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PkcsInput`<sup>Optional</sup> <a name="PkcsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.pkcsInput"></a>

```csharp
public object PkcsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.managedKeys.ManagedKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKeysAws <a name="ManagedKeysAws" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAws {
    string AccessKey,
    string KeyBits,
    string KeyType,
    string KmsKey,
    string Name,
    string SecretKey,
    object AllowGenerateKey = null,
    object AllowReplaceKey = null,
    object AllowStoreKey = null,
    object AnyMount = null,
    string Curve = null,
    string Endpoint = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey">AccessKey</a></code> | <code>string</code> | The AWS access key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits">KeyBits</a></code> | <code>string</code> | The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType">KeyType</a></code> | <code>string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey">KmsKey</a></code> | <code>string</code> | An identifier for the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name">Name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey">SecretKey</a></code> | <code>string</code> | The AWS secret key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount">AnyMount</a></code> | <code>object</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve">Curve</a></code> | <code>string</code> | The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint">Endpoint</a></code> | <code>string</code> | Used to specify a custom AWS endpoint. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region">Region</a></code> | <code>string</code> | The AWS region where the keys are stored (or will be stored). |

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

The AWS access key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#access_key ManagedKeys#access_key}

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyBits"></a>

```csharp
public string KeyBits { get; set; }
```

- *Type:* string

The size in bits for an RSA key. This field is required when 'key_type' is 'RSA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

An identifier for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#kms_key ManagedKeys#kms_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

The AWS secret key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#secret_key ManagedKeys#secret_key}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; set; }
```

- *Type:* object

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.anyMount"></a>

```csharp
public object AnyMount { get; set; }
```

- *Type:* object

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.curve"></a>

```csharp
public string Curve { get; set; }
```

- *Type:* string

The curve to use for an ECDSA key. Used when key_type is 'ECDSA'. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Used to specify a custom AWS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#endpoint ManagedKeys#endpoint}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAws.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS region where the keys are stored (or will be stored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#region ManagedKeys#region}

---

### ManagedKeysAzure <a name="ManagedKeysAzure" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAzure {
    string ClientId,
    string ClientSecret,
    string KeyName,
    string KeyType,
    string Name,
    string TenantId,
    string VaultName,
    object AllowGenerateKey = null,
    object AllowReplaceKey = null,
    object AllowStoreKey = null,
    object AnyMount = null,
    string Environment = null,
    string KeyBits = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId">ClientId</a></code> | <code>string</code> | The client id for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret for credentials to query the Azure APIs. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName">KeyName</a></code> | <code>string</code> | The Key Vault key to use for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType">KeyType</a></code> | <code>string</code> | The type of key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name">Name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId">TenantId</a></code> | <code>string</code> | The tenant id for the Azure Active Directory organization. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName">VaultName</a></code> | <code>string</code> | The Key Vault vault to use the encryption keys for encryption and decryption. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount">AnyMount</a></code> | <code>object</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment">Environment</a></code> | <code>string</code> | The Azure Cloud environment API endpoints to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits">KeyBits</a></code> | <code>string</code> | The size in bits for an RSA key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource">Resource</a></code> | <code>string</code> | The Azure Key Vault resource's DNS Suffix to connect to. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client id for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#client_id ManagedKeys#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret for credentials to query the Azure APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#client_secret ManagedKeys#client_secret}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The Key Vault key to use for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_name ManagedKeys#key_name}

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_type ManagedKeys#key_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The tenant id for the Azure Active Directory organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#tenant_id ManagedKeys#tenant_id}

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.vaultName"></a>

```csharp
public string VaultName { get; set; }
```

- *Type:* string

The Key Vault vault to use the encryption keys for encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#vault_name ManagedKeys#vault_name}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; set; }
```

- *Type:* object

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.anyMount"></a>

```csharp
public object AnyMount { get; set; }
```

- *Type:* object

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The Azure Cloud environment API endpoints to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#environment ManagedKeys#environment}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.keyBits"></a>

```csharp
public string KeyBits { get; set; }
```

- *Type:* string

The size in bits for an RSA key.

This field is required when 'key_type' is 'RSA' or when 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzure.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The Azure Key Vault resource's DNS Suffix to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#resource ManagedKeys#resource}

---

### ManagedKeysConfig <a name="ManagedKeysConfig" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Aws = null,
    object Azure = null,
    string Id = null,
    string Namespace = null,
    object Pkcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws">Aws</a></code> | <code>object</code> | aws block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#id ManagedKeys#id}. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs">Pkcs</a></code> | <code>object</code> | pkcs block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.aws"></a>

```csharp
public object Aws { get; set; }
```

- *Type:* object

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#aws ManagedKeys#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#azure ManagedKeys#azure}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#id ManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#namespace ManagedKeys#namespace}

---

##### `Pkcs`<sup>Optional</sup> <a name="Pkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysConfig.property.pkcs"></a>

```csharp
public object Pkcs { get; set; }
```

- *Type:* object

pkcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#pkcs ManagedKeys#pkcs}

---

### ManagedKeysPkcs <a name="ManagedKeysPkcs" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysPkcs {
    string KeyId,
    string KeyLabel,
    string Library,
    string Mechanism,
    string Name,
    string Pin,
    object AllowGenerateKey = null,
    object AllowReplaceKey = null,
    object AllowStoreKey = null,
    object AnyMount = null,
    string Curve = null,
    string ForceRwSession = null,
    string KeyBits = null,
    string Slot = null,
    string TokenLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId">KeyId</a></code> | <code>string</code> | The id of a PKCS#11 key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel">KeyLabel</a></code> | <code>string</code> | The label of the key to use. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library">Library</a></code> | <code>string</code> | The name of the kms_library stanza to use from Vault's config to lookup the local library path. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism">Mechanism</a></code> | <code>string</code> | The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name">Name</a></code> | <code>string</code> | A unique lowercase name that serves as identifying the key. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin">Pin</a></code> | <code>string</code> | The PIN for login. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount">AnyMount</a></code> | <code>object</code> | Allow usage from any mount point within the namespace if 'true'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve">Curve</a></code> | <code>string</code> | Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession">ForceRwSession</a></code> | <code>string</code> | Force all operations to open up a read-write session to the HSM. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits">KeyBits</a></code> | <code>string</code> | Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot">Slot</a></code> | <code>string</code> | The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953'). |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel">TokenLabel</a></code> | <code>string</code> | The slot token label to use. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The id of a PKCS#11 key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_id ManagedKeys#key_id}

---

##### `KeyLabel`<sup>Required</sup> <a name="KeyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyLabel"></a>

```csharp
public string KeyLabel { get; set; }
```

- *Type:* string

The label of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_label ManagedKeys#key_label}

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.library"></a>

```csharp
public string Library { get; set; }
```

- *Type:* string

The name of the kms_library stanza to use from Vault's config to lookup the local library path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#library ManagedKeys#library}

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.mechanism"></a>

```csharp
public string Mechanism { get; set; }
```

- *Type:* string

The encryption/decryption mechanism to use, specified as a hexadecimal (prefixed by 0x) string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#mechanism ManagedKeys#mechanism}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique lowercase name that serves as identifying the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#name ManagedKeys#name}

---

##### `Pin`<sup>Required</sup> <a name="Pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.pin"></a>

```csharp
public string Pin { get; set; }
```

- *Type:* string

The PIN for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#pin ManagedKeys#pin}

---

##### `AllowGenerateKey`<sup>Optional</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; set; }
```

- *Type:* object

If no existing key can be found in the referenced backend, instructs Vault to generate a key within the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_generate_key ManagedKeys#allow_generate_key}

---

##### `AllowReplaceKey`<sup>Optional</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to replace through generation or importing a key into the configured backend even if a key is present, if set to false those operations are forbidden if a key exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_replace_key ManagedKeys#allow_replace_key}

---

##### `AllowStoreKey`<sup>Optional</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; set; }
```

- *Type:* object

Controls the ability for Vault to import a key to the configured backend, if 'false', those operations will be forbidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#allow_store_key ManagedKeys#allow_store_key}

---

##### `AnyMount`<sup>Optional</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.anyMount"></a>

```csharp
public object AnyMount { get; set; }
```

- *Type:* object

Allow usage from any mount point within the namespace if 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#any_mount ManagedKeys#any_mount}

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.curve"></a>

```csharp
public string Curve { get; set; }
```

- *Type:* string

Supplies the curve value when using the 'CKM_ECDSA' mechanism. Required if 'allow_generate_key' is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#curve ManagedKeys#curve}

---

##### `ForceRwSession`<sup>Optional</sup> <a name="ForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.forceRwSession"></a>

```csharp
public string ForceRwSession { get; set; }
```

- *Type:* string

Force all operations to open up a read-write session to the HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#force_rw_session ManagedKeys#force_rw_session}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.keyBits"></a>

```csharp
public string KeyBits { get; set; }
```

- *Type:* string

Supplies the size in bits of the key when using 'CKM_RSA_PKCS_PSS', 'CKM_RSA_PKCS_OAEP' or 'CKM_RSA_PKCS' as a value for 'mechanism'.

Required if 'allow_generate_key' is true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#key_bits ManagedKeys#key_bits}

---

##### `Slot`<sup>Optional</sup> <a name="Slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.slot"></a>

```csharp
public string Slot { get; set; }
```

- *Type:* string

The slot number to use, specified as a string in a decimal format (e.g. '2305843009213693953').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#slot ManagedKeys#slot}

---

##### `TokenLabel`<sup>Optional</sup> <a name="TokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcs.property.tokenLabel"></a>

```csharp
public string TokenLabel { get; set; }
```

- *Type:* string

The slot token label to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/managed_keys#token_label ManagedKeys#token_label}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKeysAwsList <a name="ManagedKeysAwsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAwsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get"></a>

```csharp
private ManagedKeysAwsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKeysAwsOutputReference <a name="ManagedKeysAwsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowGenerateKey"></a>

```csharp
private void ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowReplaceKey"></a>

```csharp
private void ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAllowStoreKey"></a>

```csharp
private void ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetAnyMount"></a>

```csharp
private void ResetAnyMount()
```

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetCurve"></a>

```csharp
private void ResetCurve()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput">CurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount">AnyMount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve">Curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits">KeyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKeyInput"></a>

```csharp
public object AllowGenerateKeyInput { get; }
```

- *Type:* object

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKeyInput"></a>

```csharp
public object AllowReplaceKeyInput { get; }
```

- *Type:* object

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKeyInput"></a>

```csharp
public object AllowStoreKeyInput { get; }
```

- *Type:* object

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMountInput"></a>

```csharp
public object AnyMountInput { get; }
```

- *Type:* object

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curveInput"></a>

```csharp
public string CurveInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBitsInput"></a>

```csharp
public string KeyBitsInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; }
```

- *Type:* object

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; }
```

- *Type:* object

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; }
```

- *Type:* object

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.anyMount"></a>

```csharp
public object AnyMount { get; }
```

- *Type:* object

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.curve"></a>

```csharp
public string Curve { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyBits"></a>

```csharp
public string KeyBits { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAwsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKeysAzureList <a name="ManagedKeysAzureList" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get"></a>

```csharp
private ManagedKeysAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKeysAzureOutputReference <a name="ManagedKeysAzureOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowGenerateKey"></a>

```csharp
private void ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowReplaceKey"></a>

```csharp
private void ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAllowStoreKey"></a>

```csharp
private void ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetAnyMount"></a>

```csharp
private void ResetAnyMount()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetKeyBits"></a>

```csharp
private void ResetKeyBits()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput">VaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount">AnyMount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits">KeyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName">VaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKeyInput"></a>

```csharp
public object AllowGenerateKeyInput { get; }
```

- *Type:* object

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKeyInput"></a>

```csharp
public object AllowReplaceKeyInput { get; }
```

- *Type:* object

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKeyInput"></a>

```csharp
public object AllowStoreKeyInput { get; }
```

- *Type:* object

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMountInput"></a>

```csharp
public object AnyMountInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBitsInput"></a>

```csharp
public string KeyBitsInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultNameInput"></a>

```csharp
public string VaultNameInput { get; }
```

- *Type:* string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; }
```

- *Type:* object

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; }
```

- *Type:* object

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; }
```

- *Type:* object

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.anyMount"></a>

```csharp
public object AnyMount { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyBits"></a>

```csharp
public string KeyBits { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.vaultName"></a>

```csharp
public string VaultName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKeysPkcsList <a name="ManagedKeysPkcsList" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysPkcsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get"></a>

```csharp
private ManagedKeysPkcsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedKeysPkcsOutputReference <a name="ManagedKeysPkcsOutputReference" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ManagedKeysPkcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey">ResetAllowGenerateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey">ResetAllowReplaceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey">ResetAllowStoreKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount">ResetAnyMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession">ResetForceRwSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot">ResetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel">ResetTokenLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowGenerateKey` <a name="ResetAllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowGenerateKey"></a>

```csharp
private void ResetAllowGenerateKey()
```

##### `ResetAllowReplaceKey` <a name="ResetAllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowReplaceKey"></a>

```csharp
private void ResetAllowReplaceKey()
```

##### `ResetAllowStoreKey` <a name="ResetAllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAllowStoreKey"></a>

```csharp
private void ResetAllowStoreKey()
```

##### `ResetAnyMount` <a name="ResetAnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetAnyMount"></a>

```csharp
private void ResetAnyMount()
```

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetCurve"></a>

```csharp
private void ResetCurve()
```

##### `ResetForceRwSession` <a name="ResetForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetForceRwSession"></a>

```csharp
private void ResetForceRwSession()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetKeyBits"></a>

```csharp
private void ResetKeyBits()
```

##### `ResetSlot` <a name="ResetSlot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetSlot"></a>

```csharp
private void ResetSlot()
```

##### `ResetTokenLabel` <a name="ResetTokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.resetTokenLabel"></a>

```csharp
private void ResetTokenLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput">AllowGenerateKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput">AllowReplaceKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput">AllowStoreKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput">AnyMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput">CurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput">ForceRwSessionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput">KeyBitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput">KeyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput">LibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput">PinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput">SlotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput">TokenLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey">AllowGenerateKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey">AllowReplaceKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey">AllowStoreKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount">AnyMount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve">Curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession">ForceRwSession</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits">KeyBits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel">KeyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library">Library</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism">Mechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin">Pin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot">Slot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel">TokenLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AllowGenerateKeyInput`<sup>Optional</sup> <a name="AllowGenerateKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKeyInput"></a>

```csharp
public object AllowGenerateKeyInput { get; }
```

- *Type:* object

---

##### `AllowReplaceKeyInput`<sup>Optional</sup> <a name="AllowReplaceKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKeyInput"></a>

```csharp
public object AllowReplaceKeyInput { get; }
```

- *Type:* object

---

##### `AllowStoreKeyInput`<sup>Optional</sup> <a name="AllowStoreKeyInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKeyInput"></a>

```csharp
public object AllowStoreKeyInput { get; }
```

- *Type:* object

---

##### `AnyMountInput`<sup>Optional</sup> <a name="AnyMountInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMountInput"></a>

```csharp
public object AnyMountInput { get; }
```

- *Type:* object

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curveInput"></a>

```csharp
public string CurveInput { get; }
```

- *Type:* string

---

##### `ForceRwSessionInput`<sup>Optional</sup> <a name="ForceRwSessionInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSessionInput"></a>

```csharp
public string ForceRwSessionInput { get; }
```

- *Type:* string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBitsInput"></a>

```csharp
public string KeyBitsInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyLabelInput`<sup>Optional</sup> <a name="KeyLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabelInput"></a>

```csharp
public string KeyLabelInput { get; }
```

- *Type:* string

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.libraryInput"></a>

```csharp
public string LibraryInput { get; }
```

- *Type:* string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanismInput"></a>

```csharp
public string MechanismInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PinInput`<sup>Optional</sup> <a name="PinInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pinInput"></a>

```csharp
public string PinInput { get; }
```

- *Type:* string

---

##### `SlotInput`<sup>Optional</sup> <a name="SlotInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slotInput"></a>

```csharp
public string SlotInput { get; }
```

- *Type:* string

---

##### `TokenLabelInput`<sup>Optional</sup> <a name="TokenLabelInput" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabelInput"></a>

```csharp
public string TokenLabelInput { get; }
```

- *Type:* string

---

##### `AllowGenerateKey`<sup>Required</sup> <a name="AllowGenerateKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowGenerateKey"></a>

```csharp
public object AllowGenerateKey { get; }
```

- *Type:* object

---

##### `AllowReplaceKey`<sup>Required</sup> <a name="AllowReplaceKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowReplaceKey"></a>

```csharp
public object AllowReplaceKey { get; }
```

- *Type:* object

---

##### `AllowStoreKey`<sup>Required</sup> <a name="AllowStoreKey" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.allowStoreKey"></a>

```csharp
public object AllowStoreKey { get; }
```

- *Type:* object

---

##### `AnyMount`<sup>Required</sup> <a name="AnyMount" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.anyMount"></a>

```csharp
public object AnyMount { get; }
```

- *Type:* object

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.curve"></a>

```csharp
public string Curve { get; }
```

- *Type:* string

---

##### `ForceRwSession`<sup>Required</sup> <a name="ForceRwSession" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.forceRwSession"></a>

```csharp
public string ForceRwSession { get; }
```

- *Type:* string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyBits"></a>

```csharp
public string KeyBits { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyLabel`<sup>Required</sup> <a name="KeyLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.keyLabel"></a>

```csharp
public string KeyLabel { get; }
```

- *Type:* string

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.library"></a>

```csharp
public string Library { get; }
```

- *Type:* string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.mechanism"></a>

```csharp
public string Mechanism { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pin`<sup>Required</sup> <a name="Pin" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.pin"></a>

```csharp
public string Pin { get; }
```

- *Type:* string

---

##### `Slot`<sup>Required</sup> <a name="Slot" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.slot"></a>

```csharp
public string Slot { get; }
```

- *Type:* string

---

##### `TokenLabel`<sup>Required</sup> <a name="TokenLabel" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.tokenLabel"></a>

```csharp
public string TokenLabel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.managedKeys.ManagedKeysPkcsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



