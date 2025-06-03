# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktf/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendClient(Construct Scope, string Id, AwsAuthBackendClientConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint">ResetEc2Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint">ResetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue">ResetIamServerIdHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience">ResetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint">ResetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion">ResetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient">ResetUseStsRegionFromClient</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetEc2Endpoint` <a name="ResetEc2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```csharp
private void ResetEc2Endpoint()
```

##### `ResetIamEndpoint` <a name="ResetIamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```csharp
private void ResetIamEndpoint()
```

##### `ResetIamServerIdHeaderValue` <a name="ResetIamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```csharp
private void ResetIamServerIdHeaderValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudience` <a name="ResetIdentityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience"></a>

```csharp
private void ResetIdentityTokenAudience()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```csharp
private void ResetStsEndpoint()
```

##### `ResetStsRegion` <a name="ResetStsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```csharp
private void ResetStsRegion()
```

##### `ResetUseStsRegionFromClient` <a name="ResetUseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient"></a>

```csharp
private void ResetUseStsRegionFromClient()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">Ec2EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">IamEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">IamServerIdHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput">IdentityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">StsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">StsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput">UseStsRegionFromClientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">StsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput"></a>

```csharp
public object DisableAutomatedRotationInput { get; }
```

- *Type:* object

---

##### `Ec2EndpointInput`<sup>Optional</sup> <a name="Ec2EndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```csharp
public string Ec2EndpointInput { get; }
```

- *Type:* string

---

##### `IamEndpointInput`<sup>Optional</sup> <a name="IamEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```csharp
public string IamEndpointInput { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValueInput`<sup>Optional</sup> <a name="IamServerIdHeaderValueInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```csharp
public string IamServerIdHeaderValueInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceInput`<sup>Optional</sup> <a name="IdentityTokenAudienceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput"></a>

```csharp
public string IdentityTokenAudienceInput { get; }
```

- *Type:* string

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```csharp
public string StsEndpointInput { get; }
```

- *Type:* string

---

##### `StsRegionInput`<sup>Optional</sup> <a name="StsRegionInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```csharp
public string StsRegionInput { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClientInput`<sup>Optional</sup> <a name="UseStsRegionFromClientInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput"></a>

```csharp
public object UseStsRegionFromClientInput { get; }
```

- *Type:* object

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation"></a>

```csharp
public object DisableAutomatedRotation { get; }
```

- *Type:* object

---

##### `Ec2Endpoint`<sup>Required</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; }
```

- *Type:* string

---

##### `IamEndpoint`<sup>Required</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValue`<sup>Required</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudience`<sup>Required</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; }
```

- *Type:* string

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `StsEndpoint`<sup>Required</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; }
```

- *Type:* string

---

##### `StsRegion`<sup>Required</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```csharp
public string StsRegion { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClient`<sup>Required</sup> <a name="UseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient"></a>

```csharp
public object UseStsRegionFromClient { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendClientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessKey = null,
    string Backend = null,
    object DisableAutomatedRotation = null,
    string Ec2Endpoint = null,
    string IamEndpoint = null,
    string IamServerIdHeaderValue = null,
    string Id = null,
    string IdentityTokenAudience = null,
    double IdentityTokenTtl = null,
    double MaxRetries = null,
    string Namespace = null,
    string RoleArn = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    string SecretKey = null,
    string StsEndpoint = null,
    string StsRegion = null,
    object UseStsRegionFromClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>object</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">StsRegion</a></code> | <code>string</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>object</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation"></a>

```csharp
public object DisableAutomatedRotation { get; set; }
```

- *Type:* object

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#disable_automated_rotation AwsAuthBackendClient#disable_automated_rotation}

---

##### `Ec2Endpoint`<sup>Optional</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `IamEndpoint`<sup>Optional</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `IamServerIdHeaderValue`<sup>Optional</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; set; }
```

- *Type:* string

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudience`<sup>Optional</sup> <a name="IdentityTokenAudience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; set; }
```

- *Type:* string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#rotation_period AwsAuthBackendClient#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#rotation_schedule AwsAuthBackendClient#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#rotation_window AwsAuthBackendClient#rotation_window}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```csharp
public string StsRegion { get; set; }
```

- *Type:* string

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `UseStsRegionFromClient`<sup>Optional</sup> <a name="UseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient"></a>

```csharp
public object UseStsRegionFromClient { get; set; }
```

- *Type:* object

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---



