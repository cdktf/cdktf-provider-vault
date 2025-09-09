# `samlAuthBackend` Submodule <a name="`samlAuthBackend` Submodule" id="@cdktf/provider-vault.samlAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackend <a name="SamlAuthBackend" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend vault_saml_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SamlAuthBackend(Construct Scope, string Id, SamlAuthBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole">ResetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert">ResetIdpCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId">ResetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl">ResetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl">ResetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging">ResetVerboseLogging</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultRole` <a name="ResetDefaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole"></a>

```csharp
private void ResetDefaultRole()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpCert` <a name="ResetIdpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert"></a>

```csharp
private void ResetIdpCert()
```

##### `ResetIdpEntityId` <a name="ResetIdpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId"></a>

```csharp
private void ResetIdpEntityId()
```

##### `ResetIdpMetadataUrl` <a name="ResetIdpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl"></a>

```csharp
private void ResetIdpMetadataUrl()
```

##### `ResetIdpSsoUrl` <a name="ResetIdpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl"></a>

```csharp
private void ResetIdpSsoUrl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetVerboseLogging` <a name="ResetVerboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging"></a>

```csharp
private void ResetVerboseLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SamlAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SamlAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SamlAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SamlAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SamlAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput">AcsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput">DefaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput">IdpCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput">IdpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput">IdpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput">IdpSsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput">VerboseLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls">AcsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole">DefaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert">IdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId">IdpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging">VerboseLogging</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AcsUrlsInput`<sup>Optional</sup> <a name="AcsUrlsInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput"></a>

```csharp
public string[] AcsUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRoleInput`<sup>Optional</sup> <a name="DefaultRoleInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput"></a>

```csharp
public string DefaultRoleInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput"></a>

```csharp
public object DisableRemountInput { get; }
```

- *Type:* object

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpCertInput`<sup>Optional</sup> <a name="IdpCertInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput"></a>

```csharp
public string IdpCertInput { get; }
```

- *Type:* string

---

##### `IdpEntityIdInput`<sup>Optional</sup> <a name="IdpEntityIdInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput"></a>

```csharp
public string IdpEntityIdInput { get; }
```

- *Type:* string

---

##### `IdpMetadataUrlInput`<sup>Optional</sup> <a name="IdpMetadataUrlInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput"></a>

```csharp
public string IdpMetadataUrlInput { get; }
```

- *Type:* string

---

##### `IdpSsoUrlInput`<sup>Optional</sup> <a name="IdpSsoUrlInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput"></a>

```csharp
public string IdpSsoUrlInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VerboseLoggingInput`<sup>Optional</sup> <a name="VerboseLoggingInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput"></a>

```csharp
public object VerboseLoggingInput { get; }
```

- *Type:* object

---

##### `AcsUrls`<sup>Required</sup> <a name="AcsUrls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls"></a>

```csharp
public string[] AcsUrls { get; }
```

- *Type:* string[]

---

##### `DefaultRole`<sup>Required</sup> <a name="DefaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole"></a>

```csharp
public string DefaultRole { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount"></a>

```csharp
public object DisableRemount { get; }
```

- *Type:* object

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert"></a>

```csharp
public string IdpCert { get; }
```

- *Type:* string

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId"></a>

```csharp
public string IdpEntityId { get; }
```

- *Type:* string

---

##### `IdpMetadataUrl`<sup>Required</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; }
```

- *Type:* string

---

##### `IdpSsoUrl`<sup>Required</sup> <a name="IdpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `VerboseLogging`<sup>Required</sup> <a name="VerboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging"></a>

```csharp
public object VerboseLogging { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendConfig <a name="SamlAuthBackendConfig" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SamlAuthBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AcsUrls,
    string EntityId,
    string DefaultRole = null,
    object DisableRemount = null,
    string Id = null,
    string IdpCert = null,
    string IdpEntityId = null,
    string IdpMetadataUrl = null,
    string IdpSsoUrl = null,
    string Namespace = null,
    string Path = null,
    object VerboseLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls">AcsUrls</a></code> | <code>string[]</code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId">EntityId</a></code> | <code>string</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole">DefaultRole</a></code> | <code>string</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>object</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert">IdpCert</a></code> | <code>string</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId">IdpEntityId</a></code> | <code>string</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging">VerboseLogging</a></code> | <code>object</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AcsUrls`<sup>Required</sup> <a name="AcsUrls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls"></a>

```csharp
public string[] AcsUrls { get; set; }
```

- *Type:* string[]

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `DefaultRole`<sup>Optional</sup> <a name="DefaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole"></a>

```csharp
public string DefaultRole { get; set; }
```

- *Type:* string

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount"></a>

```csharp
public object DisableRemount { get; set; }
```

- *Type:* object

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpCert`<sup>Optional</sup> <a name="IdpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert"></a>

```csharp
public string IdpCert { get; set; }
```

- *Type:* string

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `IdpEntityId`<sup>Optional</sup> <a name="IdpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId"></a>

```csharp
public string IdpEntityId { get; set; }
```

- *Type:* string

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `IdpMetadataUrl`<sup>Optional</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; set; }
```

- *Type:* string

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `IdpSsoUrl`<sup>Optional</sup> <a name="IdpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; set; }
```

- *Type:* string

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `VerboseLogging`<sup>Optional</sup> <a name="VerboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging"></a>

```csharp
public object VerboseLogging { get; set; }
```

- *Type:* object

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---



