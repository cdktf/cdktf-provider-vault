# `vault_pki_secret_backend_cert`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_cert`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert).

# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendCert(Construct Scope, string Id, PkiSecretBackendCertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">ResetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">ResetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">ResetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef">ResetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">ResetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">ResetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">ResetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">ResetRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">ResetUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAltNames` <a name="ResetAltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```csharp
private void ResetAltNames()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```csharp
private void ResetAutoRenew()
```

##### `ResetExcludeCnFromSans` <a name="ResetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```csharp
private void ResetExcludeCnFromSans()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpSans` <a name="ResetIpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```csharp
private void ResetIpSans()
```

##### `ResetIssuerRef` <a name="ResetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef"></a>

```csharp
private void ResetIssuerRef()
```

##### `ResetMinSecondsRemaining` <a name="ResetMinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```csharp
private void ResetMinSecondsRemaining()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOtherSans` <a name="ResetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```csharp
private void ResetOtherSans()
```

##### `ResetPrivateKeyFormat` <a name="ResetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```csharp
private void ResetPrivateKeyFormat()
```

##### `ResetRevoke` <a name="ResetRevoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```csharp
private void ResetRevoke()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetUriSans` <a name="ResetUriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```csharp
private void ResetUriSans()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds"></a>

```csharp
private void ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendCert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">CaChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">Expiration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">IssuingCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">RenewPending</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">AltNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">AutoRenewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">ExcludeCnFromSansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">IpSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput">IssuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">MinSecondsRemainingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">OtherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">PrivateKeyFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">RevokeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">UriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput">UserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">AltNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">AutoRenew</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">IpSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef">IssuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">OtherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">Revoke</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">UriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds">UserIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```csharp
public string CaChain { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```csharp
public double Expiration { get; }
```

- *Type:* double

---

##### `IssuingCa`<sup>Required</sup> <a name="IssuingCa" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```csharp
public string IssuingCa { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; }
```

- *Type:* string

---

##### `RenewPending`<sup>Required</sup> <a name="RenewPending" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```csharp
public IResolvable RenewPending { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `AltNamesInput`<sup>Optional</sup> <a name="AltNamesInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```csharp
public string[] AltNamesInput { get; }
```

- *Type:* string[]

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```csharp
public object AutoRenewInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `ExcludeCnFromSansInput`<sup>Optional</sup> <a name="ExcludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```csharp
public object ExcludeCnFromSansInput { get; }
```

- *Type:* object

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpSansInput`<sup>Optional</sup> <a name="IpSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```csharp
public string[] IpSansInput { get; }
```

- *Type:* string[]

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput"></a>

```csharp
public string IssuerRefInput { get; }
```

- *Type:* string

---

##### `MinSecondsRemainingInput`<sup>Optional</sup> <a name="MinSecondsRemainingInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```csharp
public double MinSecondsRemainingInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OtherSansInput`<sup>Optional</sup> <a name="OtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```csharp
public string[] OtherSansInput { get; }
```

- *Type:* string[]

---

##### `PrivateKeyFormatInput`<sup>Optional</sup> <a name="PrivateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```csharp
public string PrivateKeyFormatInput { get; }
```

- *Type:* string

---

##### `RevokeInput`<sup>Optional</sup> <a name="RevokeInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```csharp
public object RevokeInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `UriSansInput`<sup>Optional</sup> <a name="UriSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```csharp
public string[] UriSansInput { get; }
```

- *Type:* string[]

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput"></a>

```csharp
public string[] UserIdsInput { get; }
```

- *Type:* string[]

---

##### `AltNames`<sup>Required</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```csharp
public string[] AltNames { get; }
```

- *Type:* string[]

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```csharp
public object AutoRenew { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `ExcludeCnFromSans`<sup>Required</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```csharp
public object ExcludeCnFromSans { get; }
```

- *Type:* object

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpSans`<sup>Required</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```csharp
public string[] IpSans { get; }
```

- *Type:* string[]

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef"></a>

```csharp
public string IssuerRef { get; }
```

- *Type:* string

---

##### `MinSecondsRemaining`<sup>Required</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```csharp
public double MinSecondsRemaining { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OtherSans`<sup>Required</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```csharp
public string[] OtherSans { get; }
```

- *Type:* string[]

---

##### `PrivateKeyFormat`<sup>Required</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```csharp
public string PrivateKeyFormat { get; }
```

- *Type:* string

---

##### `Revoke`<sup>Required</sup> <a name="Revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```csharp
public object Revoke { get; }
```

- *Type:* object

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `UriSans`<sup>Required</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```csharp
public string[] UriSans { get; }
```

- *Type:* string[]

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds"></a>

```csharp
public string[] UserIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendCertConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string CommonName,
    string Name,
    string[] AltNames = null,
    object AutoRenew = null,
    object ExcludeCnFromSans = null,
    string Format = null,
    string Id = null,
    string[] IpSans = null,
    string IssuerRef = null,
    double MinSecondsRemaining = null,
    string Namespace = null,
    string[] OtherSans = null,
    string PrivateKeyFormat = null,
    object Revoke = null,
    string Ttl = null,
    string[] UriSans = null,
    string[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">CommonName</a></code> | <code>string</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">Name</a></code> | <code>string</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">AltNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">AutoRenew</a></code> | <code>object</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>object</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">Format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">IpSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef">IssuerRef</a></code> | <code>string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>double</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">OtherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">Revoke</a></code> | <code>object</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">Ttl</a></code> | <code>string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">UriSans</a></code> | <code>string[]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds">UserIds</a></code> | <code>string[]</code> | List of Subject User IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `AltNames`<sup>Optional</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```csharp
public string[] AltNames { get; set; }
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```csharp
public object AutoRenew { get; set; }
```

- *Type:* object

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `ExcludeCnFromSans`<sup>Optional</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```csharp
public object ExcludeCnFromSans { get; set; }
```

- *Type:* object

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSans`<sup>Optional</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```csharp
public string[] IpSans { get; set; }
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `IssuerRef`<sup>Optional</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef"></a>

```csharp
public string IssuerRef { get; set; }
```

- *Type:* string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `MinSecondsRemaining`<sup>Optional</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```csharp
public double MinSecondsRemaining { get; set; }
```

- *Type:* double

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `OtherSans`<sup>Optional</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```csharp
public string[] OtherSans { get; set; }
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `PrivateKeyFormat`<sup>Optional</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```csharp
public string PrivateKeyFormat { get; set; }
```

- *Type:* string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `Revoke`<sup>Optional</sup> <a name="Revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```csharp
public object Revoke { get; set; }
```

- *Type:* object

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `UriSans`<sup>Optional</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```csharp
public string[] UriSans { get; set; }
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds"></a>

```csharp
public string[] UserIds { get; set; }
```

- *Type:* string[]

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---



