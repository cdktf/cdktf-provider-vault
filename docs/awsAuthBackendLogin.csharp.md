# `awsAuthBackendLogin` Submodule <a name="`awsAuthBackendLogin` Submodule" id="@cdktf/provider-vault.awsAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendLogin <a name="AwsAuthBackendLogin" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendLogin(Construct Scope, string Id, AwsAuthBackendLoginConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod">ResetIamHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody">ResetIamRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders">ResetIamRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl">ResetIamRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce">ResetNonce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7">ResetPkcs7</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature">ResetSignature</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetIamHttpRequestMethod` <a name="ResetIamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod"></a>

```csharp
private void ResetIamHttpRequestMethod()
```

##### `ResetIamRequestBody` <a name="ResetIamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody"></a>

```csharp
private void ResetIamRequestBody()
```

##### `ResetIamRequestHeaders` <a name="ResetIamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders"></a>

```csharp
private void ResetIamRequestHeaders()
```

##### `ResetIamRequestUrl` <a name="ResetIamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl"></a>

```csharp
private void ResetIamRequestUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNonce` <a name="ResetNonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce"></a>

```csharp
private void ResetNonce()
```

##### `ResetPkcs7` <a name="ResetPkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7"></a>

```csharp
private void ResetPkcs7()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature"></a>

```csharp
private void ResetSignature()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendLogin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendLogin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendLogin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable">Renewable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput">IamHttpRequestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput">IamRequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput">IamRequestHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput">IamRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput">IdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput">NonceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input">Pkcs7Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod">IamHttpRequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody">IamRequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders">IamRequestHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl">IamRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce">Nonce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7">Pkcs7</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature">Signature</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IamHttpRequestMethodInput`<sup>Optional</sup> <a name="IamHttpRequestMethodInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput"></a>

```csharp
public string IamHttpRequestMethodInput { get; }
```

- *Type:* string

---

##### `IamRequestBodyInput`<sup>Optional</sup> <a name="IamRequestBodyInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput"></a>

```csharp
public string IamRequestBodyInput { get; }
```

- *Type:* string

---

##### `IamRequestHeadersInput`<sup>Optional</sup> <a name="IamRequestHeadersInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput"></a>

```csharp
public string IamRequestHeadersInput { get; }
```

- *Type:* string

---

##### `IamRequestUrlInput`<sup>Optional</sup> <a name="IamRequestUrlInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput"></a>

```csharp
public string IamRequestUrlInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput"></a>

```csharp
public string IdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NonceInput`<sup>Optional</sup> <a name="NonceInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput"></a>

```csharp
public string NonceInput { get; }
```

- *Type:* string

---

##### `Pkcs7Input`<sup>Optional</sup> <a name="Pkcs7Input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input"></a>

```csharp
public string Pkcs7Input { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `IamHttpRequestMethod`<sup>Required</sup> <a name="IamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod"></a>

```csharp
public string IamHttpRequestMethod { get; }
```

- *Type:* string

---

##### `IamRequestBody`<sup>Required</sup> <a name="IamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody"></a>

```csharp
public string IamRequestBody { get; }
```

- *Type:* string

---

##### `IamRequestHeaders`<sup>Required</sup> <a name="IamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders"></a>

```csharp
public string IamRequestHeaders { get; }
```

- *Type:* string

---

##### `IamRequestUrl`<sup>Required</sup> <a name="IamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl"></a>

```csharp
public string IamRequestUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Nonce`<sup>Required</sup> <a name="Nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce"></a>

```csharp
public string Nonce { get; }
```

- *Type:* string

---

##### `Pkcs7`<sup>Required</sup> <a name="Pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7"></a>

```csharp
public string Pkcs7 { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendLoginConfig <a name="AwsAuthBackendLoginConfig" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendLoginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend = null,
    string IamHttpRequestMethod = null,
    string IamRequestBody = null,
    string IamRequestHeaders = null,
    string IamRequestUrl = null,
    string Id = null,
    string Identity = null,
    string Namespace = null,
    string Nonce = null,
    string Pkcs7 = null,
    string Role = null,
    string Signature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend">Backend</a></code> | <code>string</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod">IamHttpRequestMethod</a></code> | <code>string</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody">IamRequestBody</a></code> | <code>string</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders">IamRequestHeaders</a></code> | <code>string</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl">IamRequestUrl</a></code> | <code>string</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity">Identity</a></code> | <code>string</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce">Nonce</a></code> | <code>string</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7">Pkcs7</a></code> | <code>string</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role">Role</a></code> | <code>string</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature">Signature</a></code> | <code>string</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `IamHttpRequestMethod`<sup>Optional</sup> <a name="IamHttpRequestMethod" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod"></a>

```csharp
public string IamHttpRequestMethod { get; set; }
```

- *Type:* string

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `IamRequestBody`<sup>Optional</sup> <a name="IamRequestBody" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody"></a>

```csharp
public string IamRequestBody { get; set; }
```

- *Type:* string

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `IamRequestHeaders`<sup>Optional</sup> <a name="IamRequestHeaders" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders"></a>

```csharp
public string IamRequestHeaders { get; set; }
```

- *Type:* string

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `IamRequestUrl`<sup>Optional</sup> <a name="IamRequestUrl" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl"></a>

```csharp
public string IamRequestUrl { get; set; }
```

- *Type:* string

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity"></a>

```csharp
public string Identity { get; set; }
```

- *Type:* string

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `Nonce`<sup>Optional</sup> <a name="Nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce"></a>

```csharp
public string Nonce { get; set; }
```

- *Type:* string

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `Pkcs7`<sup>Optional</sup> <a name="Pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7"></a>

```csharp
public string Pkcs7 { get; set; }
```

- *Type:* string

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---



