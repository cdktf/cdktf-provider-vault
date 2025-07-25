# `awsSecretBackendStaticRole` Submodule <a name="`awsSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendStaticRole <a name="AwsSecretBackendStaticRole" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role vault_aws_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsSecretBackendStaticRole(Construct Scope, string Id, AwsSecretBackendStaticRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig">AwsSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig">AwsSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleArn">ResetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleSessionName">ResetAssumeRoleSessionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssumeRoleArn` <a name="ResetAssumeRoleArn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleArn"></a>

```csharp
private void ResetAssumeRoleArn()
```

##### `ResetAssumeRoleSessionName` <a name="ResetAssumeRoleSessionName" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleSessionName"></a>

```csharp
private void ResetAssumeRoleSessionName()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendStaticRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendStaticRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendStaticRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendStaticRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AwsSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsSecretBackendStaticRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArnInput">AssumeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionNameInput">AssumeRoleSessionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionName">AssumeRoleSessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssumeRoleArnInput`<sup>Optional</sup> <a name="AssumeRoleArnInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArnInput"></a>

```csharp
public string AssumeRoleArnInput { get; }
```

- *Type:* string

---

##### `AssumeRoleSessionNameInput`<sup>Optional</sup> <a name="AssumeRoleSessionNameInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionNameInput"></a>

```csharp
public string AssumeRoleSessionNameInput { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AssumeRoleArn`<sup>Required</sup> <a name="AssumeRoleArn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArn"></a>

```csharp
public string AssumeRoleArn { get; }
```

- *Type:* string

---

##### `AssumeRoleSessionName`<sup>Required</sup> <a name="AssumeRoleSessionName" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionName"></a>

```csharp
public string AssumeRoleSessionName { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendStaticRoleConfig <a name="AwsSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsSecretBackendStaticRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double RotationPeriod,
    string Username,
    string AssumeRoleArn = null,
    string AssumeRoleSessionName = null,
    string Backend = null,
    string ExternalId = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.name">Name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.username">Username</a></code> | <code>string</code> | The username of the existing AWS IAM user to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>string</code> | The ARN of the role to assume when managing the static role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleSessionName">AssumeRoleSessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path where the AWS secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.externalId">ExternalId</a></code> | <code>string</code> | External ID to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#name AwsSecretBackendStaticRole#name}

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#rotation_period AwsSecretBackendStaticRole#rotation_period}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the existing AWS IAM user to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#username AwsSecretBackendStaticRole#username}

---

##### `AssumeRoleArn`<sup>Optional</sup> <a name="AssumeRoleArn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleArn"></a>

```csharp
public string AssumeRoleArn { get; set; }
```

- *Type:* string

The ARN of the role to assume when managing the static role.

This is required for cross-account role management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_arn AwsSecretBackendStaticRole#assume_role_arn}

---

##### `AssumeRoleSessionName`<sup>Optional</sup> <a name="AssumeRoleSessionName" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleSessionName"></a>

```csharp
public string AssumeRoleSessionName { get; set; }
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_session_name AwsSecretBackendStaticRole#assume_role_session_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path where the AWS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#backend AwsSecretBackendStaticRole#backend}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

External ID to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#external_id AwsSecretBackendStaticRole#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#namespace AwsSecretBackendStaticRole#namespace}

---



