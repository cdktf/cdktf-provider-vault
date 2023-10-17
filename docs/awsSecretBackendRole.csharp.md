# `vault_aws_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_aws_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role).

# `awsSecretBackendRole` Submodule <a name="`awsSecretBackendRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendRole <a name="AwsSecretBackendRole" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsSecretBackendRole(Construct Scope, string Id, AwsSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl">ResetDefaultStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups">ResetIamGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl">ResetMaxStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn">ResetPermissionsBoundaryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns">ResetPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns">ResetRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath">ResetUserPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDefaultStsTtl` <a name="ResetDefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl"></a>

```csharp
private void ResetDefaultStsTtl()
```

##### `ResetIamGroups` <a name="ResetIamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups"></a>

```csharp
private void ResetIamGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxStsTtl` <a name="ResetMaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl"></a>

```csharp
private void ResetMaxStsTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPermissionsBoundaryArn` <a name="ResetPermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn"></a>

```csharp
private void ResetPermissionsBoundaryArn()
```

##### `ResetPolicyArns` <a name="ResetPolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns"></a>

```csharp
private void ResetPolicyArns()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetRoleArns` <a name="ResetRoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns"></a>

```csharp
private void ResetRoleArns()
```

##### `ResetUserPath` <a name="ResetUserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath"></a>

```csharp
private void ResetUserPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput">DefaultStsTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput">IamGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput">MaxStsTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput">PermissionsBoundaryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput">PolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput">RoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput">UserPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl">DefaultStsTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups">IamGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl">MaxStsTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn">PermissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns">RoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath">UserPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `DefaultStsTtlInput`<sup>Optional</sup> <a name="DefaultStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput"></a>

```csharp
public double DefaultStsTtlInput { get; }
```

- *Type:* double

---

##### `IamGroupsInput`<sup>Optional</sup> <a name="IamGroupsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput"></a>

```csharp
public string[] IamGroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxStsTtlInput`<sup>Optional</sup> <a name="MaxStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput"></a>

```csharp
public double MaxStsTtlInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PermissionsBoundaryArnInput`<sup>Optional</sup> <a name="PermissionsBoundaryArnInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput"></a>

```csharp
public string PermissionsBoundaryArnInput { get; }
```

- *Type:* string

---

##### `PolicyArnsInput`<sup>Optional</sup> <a name="PolicyArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput"></a>

```csharp
public string[] PolicyArnsInput { get; }
```

- *Type:* string[]

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `RoleArnsInput`<sup>Optional</sup> <a name="RoleArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput"></a>

```csharp
public string[] RoleArnsInput { get; }
```

- *Type:* string[]

---

##### `UserPathInput`<sup>Optional</sup> <a name="UserPathInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput"></a>

```csharp
public string UserPathInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DefaultStsTtl`<sup>Required</sup> <a name="DefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl"></a>

```csharp
public double DefaultStsTtl { get; }
```

- *Type:* double

---

##### `IamGroups`<sup>Required</sup> <a name="IamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups"></a>

```csharp
public string[] IamGroups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxStsTtl`<sup>Required</sup> <a name="MaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl"></a>

```csharp
public double MaxStsTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PermissionsBoundaryArn`<sup>Required</sup> <a name="PermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn"></a>

```csharp
public string PermissionsBoundaryArn { get; }
```

- *Type:* string

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; }
```

- *Type:* string[]

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `RoleArns`<sup>Required</sup> <a name="RoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns"></a>

```csharp
public string[] RoleArns { get; }
```

- *Type:* string[]

---

##### `UserPath`<sup>Required</sup> <a name="UserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath"></a>

```csharp
public string UserPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendRoleConfig <a name="AwsSecretBackendRoleConfig" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsSecretBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string CredentialType,
    string Name,
    double DefaultStsTtl = null,
    string[] IamGroups = null,
    string Id = null,
    double MaxStsTtl = null,
    string Namespace = null,
    string PermissionsBoundaryArn = null,
    string[] PolicyArns = null,
    string PolicyDocument = null,
    string[] RoleArns = null,
    string UserPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType">CredentialType</a></code> | <code>string</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl">DefaultStsTtl</a></code> | <code>double</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups">IamGroups</a></code> | <code>string[]</code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl">MaxStsTtl</a></code> | <code>double</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn">PermissionsBoundaryArn</a></code> | <code>string</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns">RoleArns</a></code> | <code>string[]</code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath">UserPath</a></code> | <code>string</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `DefaultStsTtl`<sup>Optional</sup> <a name="DefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl"></a>

```csharp
public double DefaultStsTtl { get; set; }
```

- *Type:* double

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `IamGroups`<sup>Optional</sup> <a name="IamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups"></a>

```csharp
public string[] IamGroups { get; set; }
```

- *Type:* string[]

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxStsTtl`<sup>Optional</sup> <a name="MaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl"></a>

```csharp
public double MaxStsTtl { get; set; }
```

- *Type:* double

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `PermissionsBoundaryArn`<sup>Optional</sup> <a name="PermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn"></a>

```csharp
public string PermissionsBoundaryArn { get; set; }
```

- *Type:* string

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `RoleArns`<sup>Optional</sup> <a name="RoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns"></a>

```csharp
public string[] RoleArns { get; set; }
```

- *Type:* string[]

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `UserPath`<sup>Optional</sup> <a name="UserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath"></a>

```csharp
public string UserPath { get; set; }
```

- *Type:* string

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---



