# `spiffeAuthBackendConfig` Submodule <a name="`spiffeAuthBackendConfig` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendConfig <a name="SpiffeAuthBackendConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SpiffeAuthBackendConfig(Construct Scope, string Id, SpiffeAuthBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle">ResetBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch">ResetDeferBundleFetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem">ResetEndpointRootCaTruststorePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId">ResetEndpointSpiffeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl">ResetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetBundle` <a name="ResetBundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle"></a>

```csharp
private void ResetBundle()
```

##### `ResetDeferBundleFetch` <a name="ResetDeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch"></a>

```csharp
private void ResetDeferBundleFetch()
```

##### `ResetEndpointRootCaTruststorePem` <a name="ResetEndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem"></a>

```csharp
private void ResetEndpointRootCaTruststorePem()
```

##### `ResetEndpointSpiffeId` <a name="ResetEndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId"></a>

```csharp
private void ResetEndpointSpiffeId()
```

##### `ResetEndpointUrl` <a name="ResetEndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl"></a>

```csharp
private void ResetEndpointUrl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SpiffeAuthBackendConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeAuthBackendConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput">AudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput">BundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput">DeferBundleFetchInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput">EndpointRootCaTruststorePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput">EndpointSpiffeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput">EndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput">TrustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience">Audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle">Bundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch">DeferBundleFetch</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem">EndpointRootCaTruststorePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId">EndpointSpiffeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain">TrustDomain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput"></a>

```csharp
public string[] AudienceInput { get; }
```

- *Type:* string[]

---

##### `BundleInput`<sup>Optional</sup> <a name="BundleInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput"></a>

```csharp
public string BundleInput { get; }
```

- *Type:* string

---

##### `DeferBundleFetchInput`<sup>Optional</sup> <a name="DeferBundleFetchInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput"></a>

```csharp
public bool|IResolvable DeferBundleFetchInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EndpointRootCaTruststorePemInput`<sup>Optional</sup> <a name="EndpointRootCaTruststorePemInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput"></a>

```csharp
public string EndpointRootCaTruststorePemInput { get; }
```

- *Type:* string

---

##### `EndpointSpiffeIdInput`<sup>Optional</sup> <a name="EndpointSpiffeIdInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput"></a>

```csharp
public string EndpointSpiffeIdInput { get; }
```

- *Type:* string

---

##### `EndpointUrlInput`<sup>Optional</sup> <a name="EndpointUrlInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput"></a>

```csharp
public string EndpointUrlInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput"></a>

```csharp
public string TrustDomainInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience"></a>

```csharp
public string[] Audience { get; }
```

- *Type:* string[]

---

##### `Bundle`<sup>Required</sup> <a name="Bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle"></a>

```csharp
public string Bundle { get; }
```

- *Type:* string

---

##### `DeferBundleFetch`<sup>Required</sup> <a name="DeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch"></a>

```csharp
public bool|IResolvable DeferBundleFetch { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EndpointRootCaTruststorePem`<sup>Required</sup> <a name="EndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem"></a>

```csharp
public string EndpointRootCaTruststorePem { get; }
```

- *Type:* string

---

##### `EndpointSpiffeId`<sup>Required</sup> <a name="EndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId"></a>

```csharp
public string EndpointSpiffeId { get; }
```

- *Type:* string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain"></a>

```csharp
public string TrustDomain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendConfigConfig <a name="SpiffeAuthBackendConfigConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SpiffeAuthBackendConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Profile,
    string TrustDomain,
    string[] Audience = null,
    string Bundle = null,
    bool|IResolvable DeferBundleFetch = null,
    string EndpointRootCaTruststorePem = null,
    string EndpointSpiffeId = null,
    string EndpointUrl = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile">Profile</a></code> | <code>string</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain">TrustDomain</a></code> | <code>string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience">Audience</a></code> | <code>string[]</code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle">Bundle</a></code> | <code>string</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch">DeferBundleFetch</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem">EndpointRootCaTruststorePem</a></code> | <code>string</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId">EndpointSpiffeId</a></code> | <code>string</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain"></a>

```csharp
public string TrustDomain { get; set; }
```

- *Type:* string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience"></a>

```csharp
public string[] Audience { get; set; }
```

- *Type:* string[]

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `Bundle`<sup>Optional</sup> <a name="Bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle"></a>

```csharp
public string Bundle { get; set; }
```

- *Type:* string

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `DeferBundleFetch`<sup>Optional</sup> <a name="DeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch"></a>

```csharp
public bool|IResolvable DeferBundleFetch { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `EndpointRootCaTruststorePem`<sup>Optional</sup> <a name="EndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem"></a>

```csharp
public string EndpointRootCaTruststorePem { get; set; }
```

- *Type:* string

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `EndpointSpiffeId`<sup>Optional</sup> <a name="EndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId"></a>

```csharp
public string EndpointSpiffeId { get; set; }
```

- *Type:* string

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `EndpointUrl`<sup>Optional</sup> <a name="EndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; set; }
```

- *Type:* string

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---



