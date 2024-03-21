# `approleAuthBackendLogin` Submodule <a name="`approleAuthBackendLogin` Submodule" id="@cdktf/provider-vault.approleAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendLogin <a name="ApproleAuthBackendLogin" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login vault_approle_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ApproleAuthBackendLogin(Construct Scope, string Id, ApproleAuthBackendLoginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig">ApproleAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig">ApproleAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApproleAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendLogin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendLogin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApproleAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApproleAuthBackendLogin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApproleAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted">LeaseStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable">Renewable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseStarted`<sup>Required</sup> <a name="LeaseStarted" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.leaseStarted"></a>

```csharp
public string LeaseStarted { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendLoginConfig <a name="ApproleAuthBackendLoginConfig" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ApproleAuthBackendLoginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleId,
    string Backend = null,
    string Id = null,
    string Namespace = null,
    string SecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId">RoleId</a></code> | <code>string</code> | The RoleID to log in with. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId">SecretId</a></code> | <code>string</code> | The SecretID to log in with. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

The RoleID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#role_id ApproleAuthBackendLogin#role_id}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#backend ApproleAuthBackendLogin#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#id ApproleAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#namespace ApproleAuthBackendLogin#namespace}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendLogin.ApproleAuthBackendLoginConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The SecretID to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/approle_auth_backend_login#secret_id ApproleAuthBackendLogin#secret_id}

---



