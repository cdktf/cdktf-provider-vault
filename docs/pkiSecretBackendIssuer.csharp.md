# `vault_pki_secret_backend_issuer`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_issuer`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer).

# `pkiSecretBackendIssuer` Submodule <a name="`pkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIssuer <a name="PkiSecretBackendIssuer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendIssuer(Construct Scope, string Id, PkiSecretBackendIssuerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints">ResetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating">ResetEnableAiaUrlTemplating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName">ResetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates">ResetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior">ResetLeafNotAfterBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain">ResetManualChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers">ResetOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm">ResetRevocationSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage">ResetUsage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCrlDistributionPoints` <a name="ResetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints"></a>

```csharp
private void ResetCrlDistributionPoints()
```

##### `ResetEnableAiaUrlTemplating` <a name="ResetEnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating"></a>

```csharp
private void ResetEnableAiaUrlTemplating()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerName` <a name="ResetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName"></a>

```csharp
private void ResetIssuerName()
```

##### `ResetIssuingCertificates` <a name="ResetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates"></a>

```csharp
private void ResetIssuingCertificates()
```

##### `ResetLeafNotAfterBehavior` <a name="ResetLeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior"></a>

```csharp
private void ResetLeafNotAfterBehavior()
```

##### `ResetManualChain` <a name="ResetManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain"></a>

```csharp
private void ResetManualChain()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOcspServers` <a name="ResetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers"></a>

```csharp
private void ResetOcspServers()
```

##### `ResetRevocationSignatureAlgorithm` <a name="ResetRevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm"></a>

```csharp
private void ResetRevocationSignatureAlgorithm()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage"></a>

```csharp
private void ResetUsage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIssuer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIssuer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIssuer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendIssuer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendIssuer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId">IssuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput">CrlDistributionPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput">EnableAiaUrlTemplatingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput">IssuerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput">IssuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput">IssuingCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput">LeafNotAfterBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput">ManualChainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput">OcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput">RevocationSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput">UsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating">EnableAiaUrlTemplating</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName">IssuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef">IssuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates">IssuingCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain">ManualChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers">OcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm">RevocationSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage">Usage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId"></a>

```csharp
public string IssuerId { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CrlDistributionPointsInput`<sup>Optional</sup> <a name="CrlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput"></a>

```csharp
public string[] CrlDistributionPointsInput { get; }
```

- *Type:* string[]

---

##### `EnableAiaUrlTemplatingInput`<sup>Optional</sup> <a name="EnableAiaUrlTemplatingInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput"></a>

```csharp
public object EnableAiaUrlTemplatingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerNameInput`<sup>Optional</sup> <a name="IssuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput"></a>

```csharp
public string IssuerNameInput { get; }
```

- *Type:* string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput"></a>

```csharp
public string IssuerRefInput { get; }
```

- *Type:* string

---

##### `IssuingCertificatesInput`<sup>Optional</sup> <a name="IssuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput"></a>

```csharp
public string[] IssuingCertificatesInput { get; }
```

- *Type:* string[]

---

##### `LeafNotAfterBehaviorInput`<sup>Optional</sup> <a name="LeafNotAfterBehaviorInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput"></a>

```csharp
public string LeafNotAfterBehaviorInput { get; }
```

- *Type:* string

---

##### `ManualChainInput`<sup>Optional</sup> <a name="ManualChainInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput"></a>

```csharp
public string[] ManualChainInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OcspServersInput`<sup>Optional</sup> <a name="OcspServersInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput"></a>

```csharp
public string[] OcspServersInput { get; }
```

- *Type:* string[]

---

##### `RevocationSignatureAlgorithmInput`<sup>Optional</sup> <a name="RevocationSignatureAlgorithmInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput"></a>

```csharp
public string RevocationSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput"></a>

```csharp
public string UsageInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CrlDistributionPoints`<sup>Required</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints"></a>

```csharp
public string[] CrlDistributionPoints { get; }
```

- *Type:* string[]

---

##### `EnableAiaUrlTemplating`<sup>Required</sup> <a name="EnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating"></a>

```csharp
public object EnableAiaUrlTemplating { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerName`<sup>Required</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName"></a>

```csharp
public string IssuerName { get; }
```

- *Type:* string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef"></a>

```csharp
public string IssuerRef { get; }
```

- *Type:* string

---

##### `IssuingCertificates`<sup>Required</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates"></a>

```csharp
public string[] IssuingCertificates { get; }
```

- *Type:* string[]

---

##### `LeafNotAfterBehavior`<sup>Required</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```csharp
public string LeafNotAfterBehavior { get; }
```

- *Type:* string

---

##### `ManualChain`<sup>Required</sup> <a name="ManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain"></a>

```csharp
public string[] ManualChain { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OcspServers`<sup>Required</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers"></a>

```csharp
public string[] OcspServers { get; }
```

- *Type:* string[]

---

##### `RevocationSignatureAlgorithm`<sup>Required</sup> <a name="RevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm"></a>

```csharp
public string RevocationSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIssuerConfig <a name="PkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendIssuerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string IssuerRef,
    string[] CrlDistributionPoints = null,
    object EnableAiaUrlTemplating = null,
    string Id = null,
    string IssuerName = null,
    string[] IssuingCertificates = null,
    string LeafNotAfterBehavior = null,
    string[] ManualChain = null,
    string Namespace = null,
    string[] OcspServers = null,
    string RevocationSignatureAlgorithm = null,
    string Usage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend">Backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef">IssuerRef</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>string[]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating">EnableAiaUrlTemplating</a></code> | <code>object</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName">IssuerName</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates">IssuingCertificates</a></code> | <code>string[]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>string</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain">ManualChain</a></code> | <code>string[]</code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers">OcspServers</a></code> | <code>string[]</code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm">RevocationSignatureAlgorithm</a></code> | <code>string</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage">Usage</a></code> | <code>string</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef"></a>

```csharp
public string IssuerRef { get; set; }
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `CrlDistributionPoints`<sup>Optional</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints"></a>

```csharp
public string[] CrlDistributionPoints { get; set; }
```

- *Type:* string[]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `EnableAiaUrlTemplating`<sup>Optional</sup> <a name="EnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating"></a>

```csharp
public object EnableAiaUrlTemplating { get; set; }
```

- *Type:* object

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerName`<sup>Optional</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName"></a>

```csharp
public string IssuerName { get; set; }
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `IssuingCertificates`<sup>Optional</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates"></a>

```csharp
public string[] IssuingCertificates { get; set; }
```

- *Type:* string[]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `LeafNotAfterBehavior`<sup>Optional</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior"></a>

```csharp
public string LeafNotAfterBehavior { get; set; }
```

- *Type:* string

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `ManualChain`<sup>Optional</sup> <a name="ManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain"></a>

```csharp
public string[] ManualChain { get; set; }
```

- *Type:* string[]

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `OcspServers`<sup>Optional</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers"></a>

```csharp
public string[] OcspServers { get; set; }
```

- *Type:* string[]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `RevocationSignatureAlgorithm`<sup>Optional</sup> <a name="RevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm"></a>

```csharp
public string RevocationSignatureAlgorithm { get; set; }
```

- *Type:* string

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage"></a>

```csharp
public string Usage { get; set; }
```

- *Type:* string

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---



