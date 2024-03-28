# `awsAuthBackendConfigIdentity` Submodule <a name="`awsAuthBackendConfigIdentity` Submodule" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendConfigIdentity <a name="AwsAuthBackendConfigIdentity" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendConfigIdentity(Construct Scope, string Id, AwsAuthBackendConfigIdentityConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias">ResetEc2Alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata">ResetEc2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias">ResetIamAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata">ResetIamMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetEc2Alias` <a name="ResetEc2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias"></a>

```csharp
private void ResetEc2Alias()
```

##### `ResetEc2Metadata` <a name="ResetEc2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata"></a>

```csharp
private void ResetEc2Metadata()
```

##### `ResetIamAlias` <a name="ResetIamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias"></a>

```csharp
private void ResetIamAlias()
```

##### `ResetIamMetadata` <a name="ResetIamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata"></a>

```csharp
private void ResetIamMetadata()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendConfigIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendConfigIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendConfigIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendConfigIdentity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendConfigIdentity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendConfigIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendConfigIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput">Ec2AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput">Ec2MetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput">IamAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput">IamMetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias">Ec2Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata">Ec2Metadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias">IamAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata">IamMetadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `Ec2AliasInput`<sup>Optional</sup> <a name="Ec2AliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput"></a>

```csharp
public string Ec2AliasInput { get; }
```

- *Type:* string

---

##### `Ec2MetadataInput`<sup>Optional</sup> <a name="Ec2MetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput"></a>

```csharp
public string[] Ec2MetadataInput { get; }
```

- *Type:* string[]

---

##### `IamAliasInput`<sup>Optional</sup> <a name="IamAliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput"></a>

```csharp
public string IamAliasInput { get; }
```

- *Type:* string

---

##### `IamMetadataInput`<sup>Optional</sup> <a name="IamMetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput"></a>

```csharp
public string[] IamMetadataInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Ec2Alias`<sup>Required</sup> <a name="Ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias"></a>

```csharp
public string Ec2Alias { get; }
```

- *Type:* string

---

##### `Ec2Metadata`<sup>Required</sup> <a name="Ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata"></a>

```csharp
public string[] Ec2Metadata { get; }
```

- *Type:* string[]

---

##### `IamAlias`<sup>Required</sup> <a name="IamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias"></a>

```csharp
public string IamAlias { get; }
```

- *Type:* string

---

##### `IamMetadata`<sup>Required</sup> <a name="IamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata"></a>

```csharp
public string[] IamMetadata { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendConfigIdentityConfig <a name="AwsAuthBackendConfigIdentityConfig" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendConfigIdentityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend = null,
    string Ec2Alias = null,
    string[] Ec2Metadata = null,
    string IamAlias = null,
    string[] IamMetadata = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias">Ec2Alias</a></code> | <code>string</code> | Configures how to generate the identity alias when using the ec2 auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata">Ec2Metadata</a></code> | <code>string[]</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias">IamAlias</a></code> | <code>string</code> | How to generate the identity alias when using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata">IamMetadata</a></code> | <code>string[]</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}

---

##### `Ec2Alias`<sup>Optional</sup> <a name="Ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias"></a>

```csharp
public string Ec2Alias { get; set; }
```

- *Type:* string

Configures how to generate the identity alias when using the ec2 auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}

---

##### `Ec2Metadata`<sup>Optional</sup> <a name="Ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata"></a>

```csharp
public string[] Ec2Metadata { get; set; }
```

- *Type:* string[]

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}

---

##### `IamAlias`<sup>Optional</sup> <a name="IamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias"></a>

```csharp
public string IamAlias { get; set; }
```

- *Type:* string

How to generate the identity alias when using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}

---

##### `IamMetadata`<sup>Optional</sup> <a name="IamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata"></a>

```csharp
public string[] IamMetadata { get; set; }
```

- *Type:* string[]

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}

---



