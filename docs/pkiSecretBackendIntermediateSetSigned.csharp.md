# `vault_pki_secret_backend_intermediate_set_signed`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_intermediate_set_signed`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed).

# `pkiSecretBackendIntermediateSetSigned` Submodule <a name="`pkiSecretBackendIntermediateSetSigned` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIntermediateSetSigned <a name="PkiSecretBackendIntermediateSetSigned" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed vault_pki_secret_backend_intermediate_set_signed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendIntermediateSetSigned(Construct Scope, string Id, PkiSecretBackendIntermediateSetSignedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig">PkiSecretBackendIntermediateSetSignedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig">PkiSecretBackendIntermediateSetSignedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIntermediateSetSigned resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIntermediateSetSigned.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIntermediateSetSigned.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIntermediateSetSigned.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIntermediateSetSigned.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendIntermediateSetSigned resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendIntermediateSetSigned to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendIntermediateSetSigned that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIntermediateSetSigned to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedIssuers">ImportedIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedKeys">ImportedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ImportedIssuers`<sup>Required</sup> <a name="ImportedIssuers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedIssuers"></a>

```csharp
public string[] ImportedIssuers { get; }
```

- *Type:* string[]

---

##### `ImportedKeys`<sup>Required</sup> <a name="ImportedKeys" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedKeys"></a>

```csharp
public string[] ImportedKeys { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIntermediateSetSignedConfig <a name="PkiSecretBackendIntermediateSetSignedConfig" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendIntermediateSetSignedConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string Certificate,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.certificate">Certificate</a></code> | <code>string</code> | The certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#id PkiSecretBackendIntermediateSetSigned#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#backend PkiSecretBackendIntermediateSetSigned#backend}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

The certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#certificate PkiSecretBackendIntermediateSetSigned#certificate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#id PkiSecretBackendIntermediateSetSigned#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_intermediate_set_signed#namespace PkiSecretBackendIntermediateSetSigned#namespace}

---



