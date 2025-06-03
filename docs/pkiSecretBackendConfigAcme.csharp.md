# `pkiSecretBackendConfigAcme` Submodule <a name="`pkiSecretBackendConfigAcme` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAcme <a name="PkiSecretBackendConfigAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigAcme(Construct Scope, string Id, PkiSecretBackendConfigAcmeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers">ResetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage">ResetAllowRoleExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy">ResetDefaultDirectoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver">ResetDnsResolver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy">ResetEabPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedIssuers` <a name="ResetAllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers"></a>

```csharp
private void ResetAllowedIssuers()
```

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetAllowRoleExtKeyUsage` <a name="ResetAllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage"></a>

```csharp
private void ResetAllowRoleExtKeyUsage()
```

##### `ResetDefaultDirectoryPolicy` <a name="ResetDefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy"></a>

```csharp
private void ResetDefaultDirectoryPolicy()
```

##### `ResetDnsResolver` <a name="ResetDnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver"></a>

```csharp
private void ResetDnsResolver()
```

##### `ResetEabPolicy` <a name="ResetEabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy"></a>

```csharp
private void ResetEabPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAcme.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAcme.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAcme.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendConfigAcme.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigAcme to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigAcme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAcme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput">AllowedIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput">AllowRoleExtKeyUsageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput">DefaultDirectoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput">DnsResolverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput">EabPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers">AllowedIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage">AllowRoleExtKeyUsage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy">DefaultDirectoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver">DnsResolver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy">EabPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedIssuersInput`<sup>Optional</sup> <a name="AllowedIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput"></a>

```csharp
public string[] AllowedIssuersInput { get; }
```

- *Type:* string[]

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `AllowRoleExtKeyUsageInput`<sup>Optional</sup> <a name="AllowRoleExtKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput"></a>

```csharp
public object AllowRoleExtKeyUsageInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DefaultDirectoryPolicyInput`<sup>Optional</sup> <a name="DefaultDirectoryPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput"></a>

```csharp
public string DefaultDirectoryPolicyInput { get; }
```

- *Type:* string

---

##### `DnsResolverInput`<sup>Optional</sup> <a name="DnsResolverInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput"></a>

```csharp
public string DnsResolverInput { get; }
```

- *Type:* string

---

##### `EabPolicyInput`<sup>Optional</sup> <a name="EabPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput"></a>

```csharp
public string EabPolicyInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AllowedIssuers`<sup>Required</sup> <a name="AllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers"></a>

```csharp
public string[] AllowedIssuers { get; }
```

- *Type:* string[]

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `AllowRoleExtKeyUsage`<sup>Required</sup> <a name="AllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage"></a>

```csharp
public object AllowRoleExtKeyUsage { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DefaultDirectoryPolicy`<sup>Required</sup> <a name="DefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy"></a>

```csharp
public string DefaultDirectoryPolicy { get; }
```

- *Type:* string

---

##### `DnsResolver`<sup>Required</sup> <a name="DnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver"></a>

```csharp
public string DnsResolver { get; }
```

- *Type:* string

---

##### `EabPolicy`<sup>Required</sup> <a name="EabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy"></a>

```csharp
public string EabPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAcmeConfig <a name="PkiSecretBackendConfigAcmeConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendConfigAcmeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    object Enabled,
    string[] AllowedIssuers = null,
    string[] AllowedRoles = null,
    object AllowRoleExtKeyUsage = null,
    string DefaultDirectoryPolicy = null,
    string DnsResolver = null,
    string EabPolicy = null,
    string Id = null,
    double MaxTtl = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend">Backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled">Enabled</a></code> | <code>object</code> | Specifies whether ACME is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers">AllowedIssuers</a></code> | <code>string[]</code> | Specifies which issuers are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | Specifies which roles are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage">AllowRoleExtKeyUsage</a></code> | <code>object</code> | Specifies whether the ExtKeyUsage field from a role is used. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy">DefaultDirectoryPolicy</a></code> | <code>string</code> | Specifies the policy to be used for non-role-qualified ACME requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver">DnsResolver</a></code> | <code>string</code> | DNS resolver to use for domain resolution on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy">EabPolicy</a></code> | <code>string</code> | Specifies the policy to use for external account binding behaviour. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Specifies the maximum TTL in seconds for certificates issued by ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Specifies whether ACME is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}

---

##### `AllowedIssuers`<sup>Optional</sup> <a name="AllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers"></a>

```csharp
public string[] AllowedIssuers { get; set; }
```

- *Type:* string[]

Specifies which issuers are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

Specifies which roles are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}

---

##### `AllowRoleExtKeyUsage`<sup>Optional</sup> <a name="AllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage"></a>

```csharp
public object AllowRoleExtKeyUsage { get; set; }
```

- *Type:* object

Specifies whether the ExtKeyUsage field from a role is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}

---

##### `DefaultDirectoryPolicy`<sup>Optional</sup> <a name="DefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy"></a>

```csharp
public string DefaultDirectoryPolicy { get; set; }
```

- *Type:* string

Specifies the policy to be used for non-role-qualified ACME requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}

---

##### `DnsResolver`<sup>Optional</sup> <a name="DnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver"></a>

```csharp
public string DnsResolver { get; set; }
```

- *Type:* string

DNS resolver to use for domain resolution on this mount.

Must be in the format <host>:<port>, with both parts mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}

---

##### `EabPolicy`<sup>Optional</sup> <a name="EabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy"></a>

```csharp
public string EabPolicy { get; set; }
```

- *Type:* string

Specifies the policy to use for external account binding behaviour.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Specifies the maximum TTL in seconds for certificates issued by ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}

---



