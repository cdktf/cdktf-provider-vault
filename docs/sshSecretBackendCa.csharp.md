# `sshSecretBackendCa` Submodule <a name="`sshSecretBackendCa` Submodule" id="@cdktf/provider-vault.sshSecretBackendCa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendCa <a name="SshSecretBackendCa" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca vault_ssh_secret_backend_ca}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendCa(Construct Scope, string Id, SshSecretBackendCaConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig">SshSecretBackendCaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig">SshSecretBackendCaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey">ResetGenerateSigningKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey">ResetPublicKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetGenerateSigningKey` <a name="ResetGenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey"></a>

```csharp
private void ResetGenerateSigningKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SshSecretBackendCa resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendCa.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendCa.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendCa.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendCa.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SshSecretBackendCa resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SshSecretBackendCa to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SshSecretBackendCa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SshSecretBackendCa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput">GenerateSigningKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey">GenerateSigningKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `GenerateSigningKeyInput`<sup>Optional</sup> <a name="GenerateSigningKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput"></a>

```csharp
public object GenerateSigningKeyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `GenerateSigningKey`<sup>Required</sup> <a name="GenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey"></a>

```csharp
public object GenerateSigningKey { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendCaConfig <a name="SshSecretBackendCaConfig" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendCaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend = null,
    object GenerateSigningKey = null,
    string Id = null,
    string Namespace = null,
    string PrivateKey = null,
    string PublicKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the SSH Secret Backend where the CA should be configured. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey">GenerateSigningKey</a></code> | <code>object</code> | Whether Vault should generate the signing key pair internally. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Private key part the SSH CA key pair; required if generate_signing_key is false. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key part the SSH CA key pair; required if generate_signing_key is false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the SSH Secret Backend where the CA should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#backend SshSecretBackendCa#backend}

---

##### `GenerateSigningKey`<sup>Optional</sup> <a name="GenerateSigningKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey"></a>

```csharp
public object GenerateSigningKey { get; set; }
```

- *Type:* object

Whether Vault should generate the signing key pair internally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#generate_signing_key SshSecretBackendCa#generate_signing_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#namespace SshSecretBackendCa#namespace}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Private key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#private_key SshSecretBackendCa#private_key}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ssh_secret_backend_ca#public_key SshSecretBackendCa#public_key}

---



