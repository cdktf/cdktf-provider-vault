# `pkiSecretBackendRootCert` Submodule <a name="`pkiSecretBackendRootCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootCert <a name="PkiSecretBackendRootCert" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert vault_pki_secret_backend_root_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRootCert(Construct Scope, string Id, PkiSecretBackendRootCertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig">PkiSecretBackendRootCertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig">PkiSecretBackendRootCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames">ResetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans">ResetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains">ResetExcludedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains">ResetExcludedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans">ResetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName">ResetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef">ResetKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId">ResetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName">ResetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength">ResetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter">ResetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans">ResetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu">ResetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains">ResetPermittedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains">ResetPermittedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat">ResetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits">ResetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans">ResetUriSans</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAltNames` <a name="ResetAltNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames"></a>

```csharp
private void ResetAltNames()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetExcludeCnFromSans` <a name="ResetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans"></a>

```csharp
private void ResetExcludeCnFromSans()
```

##### `ResetExcludedDnsDomains` <a name="ResetExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains"></a>

```csharp
private void ResetExcludedDnsDomains()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses"></a>

```csharp
private void ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges"></a>

```csharp
private void ResetExcludedIpRanges()
```

##### `ResetExcludedUriDomains` <a name="ResetExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains"></a>

```csharp
private void ResetExcludedUriDomains()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpSans` <a name="ResetIpSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans"></a>

```csharp
private void ResetIpSans()
```

##### `ResetIssuerName` <a name="ResetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName"></a>

```csharp
private void ResetIssuerName()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits"></a>

```csharp
private void ResetKeyBits()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetKeyRef` <a name="ResetKeyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef"></a>

```csharp
private void ResetKeyRef()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetManagedKeyId` <a name="ResetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId"></a>

```csharp
private void ResetManagedKeyId()
```

##### `ResetManagedKeyName` <a name="ResetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName"></a>

```csharp
private void ResetManagedKeyName()
```

##### `ResetMaxPathLength` <a name="ResetMaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength"></a>

```csharp
private void ResetMaxPathLength()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNotAfter` <a name="ResetNotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter"></a>

```csharp
private void ResetNotAfter()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOtherSans` <a name="ResetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans"></a>

```csharp
private void ResetOtherSans()
```

##### `ResetOu` <a name="ResetOu" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu"></a>

```csharp
private void ResetOu()
```

##### `ResetPermittedDnsDomains` <a name="ResetPermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains"></a>

```csharp
private void ResetPermittedDnsDomains()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses"></a>

```csharp
private void ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges"></a>

```csharp
private void ResetPermittedIpRanges()
```

##### `ResetPermittedUriDomains` <a name="ResetPermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains"></a>

```csharp
private void ResetPermittedUriDomains()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetPrivateKeyFormat` <a name="ResetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat"></a>

```csharp
private void ResetPrivateKeyFormat()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetSignatureBits` <a name="ResetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits"></a>

```csharp
private void ResetSignatureBits()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetUriSans` <a name="ResetUriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans"></a>

```csharp
private void ResetUriSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRootCert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRootCert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRootCert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendRootCert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendRootCert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendRootCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId">IssuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa">IssuingCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput">AltNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput">ExcludeCnFromSansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput">ExcludedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput">ExcludedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput">IpSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput">IssuerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput">KeyBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput">KeyRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput">ManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput">ManagedKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput">MaxPathLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput">NotAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput">OtherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput">OuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput">PermittedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput">PermittedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput">PrivateKeyFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput">SignatureBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput">StreetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput">UriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames">AltNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains">ExcludedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains">ExcludedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans">IpSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName">IssuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits">KeyBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef">KeyRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId">ManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName">ManagedKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength">MaxPathLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans">OtherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou">Ou</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains">PermittedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains">PermittedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits">SignatureBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress">StreetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans">UriSans</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId"></a>

```csharp
public string IssuerId { get; }
```

- *Type:* string

---

##### `IssuingCa`<sup>Required</sup> <a name="IssuingCa" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa"></a>

```csharp
public string IssuingCa { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `AltNamesInput`<sup>Optional</sup> <a name="AltNamesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput"></a>

```csharp
public string[] AltNamesInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `ExcludeCnFromSansInput`<sup>Optional</sup> <a name="ExcludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput"></a>

```csharp
public object ExcludeCnFromSansInput { get; }
```

- *Type:* object

---

##### `ExcludedDnsDomainsInput`<sup>Optional</sup> <a name="ExcludedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput"></a>

```csharp
public string[] ExcludedDnsDomainsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput"></a>

```csharp
public string[] ExcludedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput"></a>

```csharp
public string[] ExcludedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedUriDomainsInput`<sup>Optional</sup> <a name="ExcludedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput"></a>

```csharp
public string[] ExcludedUriDomainsInput { get; }
```

- *Type:* string[]

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpSansInput`<sup>Optional</sup> <a name="IpSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput"></a>

```csharp
public string[] IpSansInput { get; }
```

- *Type:* string[]

---

##### `IssuerNameInput`<sup>Optional</sup> <a name="IssuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput"></a>

```csharp
public string IssuerNameInput { get; }
```

- *Type:* string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput"></a>

```csharp
public double KeyBitsInput { get; }
```

- *Type:* double

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyRefInput`<sup>Optional</sup> <a name="KeyRefInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput"></a>

```csharp
public string KeyRefInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `ManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput"></a>

```csharp
public string ManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `ManagedKeyNameInput`<sup>Optional</sup> <a name="ManagedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput"></a>

```csharp
public string ManagedKeyNameInput { get; }
```

- *Type:* string

---

##### `MaxPathLengthInput`<sup>Optional</sup> <a name="MaxPathLengthInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput"></a>

```csharp
public double MaxPathLengthInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NotAfterInput`<sup>Optional</sup> <a name="NotAfterInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput"></a>

```csharp
public string NotAfterInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `OtherSansInput`<sup>Optional</sup> <a name="OtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput"></a>

```csharp
public string[] OtherSansInput { get; }
```

- *Type:* string[]

---

##### `OuInput`<sup>Optional</sup> <a name="OuInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput"></a>

```csharp
public string OuInput { get; }
```

- *Type:* string

---

##### `PermittedDnsDomainsInput`<sup>Optional</sup> <a name="PermittedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput"></a>

```csharp
public string[] PermittedDnsDomainsInput { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput"></a>

```csharp
public string[] PermittedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput"></a>

```csharp
public string[] PermittedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `PermittedUriDomainsInput`<sup>Optional</sup> <a name="PermittedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput"></a>

```csharp
public string[] PermittedUriDomainsInput { get; }
```

- *Type:* string[]

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `PrivateKeyFormatInput`<sup>Optional</sup> <a name="PrivateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput"></a>

```csharp
public string PrivateKeyFormatInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `SignatureBitsInput`<sup>Optional</sup> <a name="SignatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput"></a>

```csharp
public double SignatureBitsInput { get; }
```

- *Type:* double

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput"></a>

```csharp
public string StreetAddressInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriSansInput`<sup>Optional</sup> <a name="UriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput"></a>

```csharp
public string[] UriSansInput { get; }
```

- *Type:* string[]

---

##### `AltNames`<sup>Required</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames"></a>

```csharp
public string[] AltNames { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `ExcludeCnFromSans`<sup>Required</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans"></a>

```csharp
public object ExcludeCnFromSans { get; }
```

- *Type:* object

---

##### `ExcludedDnsDomains`<sup>Required</sup> <a name="ExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains"></a>

```csharp
public string[] ExcludedDnsDomains { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; }
```

- *Type:* string[]

---

##### `ExcludedUriDomains`<sup>Required</sup> <a name="ExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains"></a>

```csharp
public string[] ExcludedUriDomains { get; }
```

- *Type:* string[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpSans`<sup>Required</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans"></a>

```csharp
public string[] IpSans { get; }
```

- *Type:* string[]

---

##### `IssuerName`<sup>Required</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName"></a>

```csharp
public string IssuerName { get; }
```

- *Type:* string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits"></a>

```csharp
public double KeyBits { get; }
```

- *Type:* double

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyRef`<sup>Required</sup> <a name="KeyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef"></a>

```csharp
public string KeyRef { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `ManagedKeyId`<sup>Required</sup> <a name="ManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId"></a>

```csharp
public string ManagedKeyId { get; }
```

- *Type:* string

---

##### `ManagedKeyName`<sup>Required</sup> <a name="ManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName"></a>

```csharp
public string ManagedKeyName { get; }
```

- *Type:* string

---

##### `MaxPathLength`<sup>Required</sup> <a name="MaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength"></a>

```csharp
public double MaxPathLength { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OtherSans`<sup>Required</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans"></a>

```csharp
public string[] OtherSans { get; }
```

- *Type:* string[]

---

##### `Ou`<sup>Required</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou"></a>

```csharp
public string Ou { get; }
```

- *Type:* string

---

##### `PermittedDnsDomains`<sup>Required</sup> <a name="PermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains"></a>

```csharp
public string[] PermittedDnsDomains { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; }
```

- *Type:* string[]

---

##### `PermittedUriDomains`<sup>Required</sup> <a name="PermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains"></a>

```csharp
public string[] PermittedUriDomains { get; }
```

- *Type:* string[]

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `PrivateKeyFormat`<sup>Required</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat"></a>

```csharp
public string PrivateKeyFormat { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `SignatureBits`<sup>Required</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits"></a>

```csharp
public double SignatureBits { get; }
```

- *Type:* double

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress"></a>

```csharp
public string StreetAddress { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UriSans`<sup>Required</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans"></a>

```csharp
public string[] UriSans { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootCertConfig <a name="PkiSecretBackendRootCertConfig" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendRootCertConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string CommonName,
    string Type,
    string[] AltNames = null,
    string Country = null,
    object ExcludeCnFromSans = null,
    string[] ExcludedDnsDomains = null,
    string[] ExcludedEmailAddresses = null,
    string[] ExcludedIpRanges = null,
    string[] ExcludedUriDomains = null,
    string Format = null,
    string Id = null,
    string[] IpSans = null,
    string IssuerName = null,
    double KeyBits = null,
    string KeyName = null,
    string KeyRef = null,
    string KeyType = null,
    string Locality = null,
    string ManagedKeyId = null,
    string ManagedKeyName = null,
    double MaxPathLength = null,
    string Namespace = null,
    string NotAfter = null,
    string Organization = null,
    string[] OtherSans = null,
    string Ou = null,
    string[] PermittedDnsDomains = null,
    string[] PermittedEmailAddresses = null,
    string[] PermittedIpRanges = null,
    string[] PermittedUriDomains = null,
    string PostalCode = null,
    string PrivateKeyFormat = null,
    string Province = null,
    double SignatureBits = null,
    string StreetAddress = null,
    string Ttl = null,
    string[] UriSans = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend">Backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName">CommonName</a></code> | <code>string</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type">Type</a></code> | <code>string</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames">AltNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country">Country</a></code> | <code>string</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>object</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains">ExcludedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains">ExcludedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format">Format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans">IpSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName">IssuerName</a></code> | <code>string</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits">KeyBits</a></code> | <code>double</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName">KeyName</a></code> | <code>string</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef">KeyRef</a></code> | <code>string</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType">KeyType</a></code> | <code>string</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality">Locality</a></code> | <code>string</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId">ManagedKeyId</a></code> | <code>string</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName">ManagedKeyName</a></code> | <code>string</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength">MaxPathLength</a></code> | <code>double</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter">NotAfter</a></code> | <code>string</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization">Organization</a></code> | <code>string</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans">OtherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou">Ou</a></code> | <code>string</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains">PermittedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains">PermittedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province">Province</a></code> | <code>string</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits">SignatureBits</a></code> | <code>double</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress">StreetAddress</a></code> | <code>string</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl">Ttl</a></code> | <code>string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans">UriSans</a></code> | <code>string[]</code> | List of alternative URIs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `AltNames`<sup>Optional</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames"></a>

```csharp
public string[] AltNames { get; set; }
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `ExcludeCnFromSans`<sup>Optional</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans"></a>

```csharp
public object ExcludeCnFromSans { get; set; }
```

- *Type:* object

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `ExcludedDnsDomains`<sup>Optional</sup> <a name="ExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains"></a>

```csharp
public string[] ExcludedDnsDomains { get; set; }
```

- *Type:* string[]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; set; }
```

- *Type:* string[]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; set; }
```

- *Type:* string[]

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `ExcludedUriDomains`<sup>Optional</sup> <a name="ExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains"></a>

```csharp
public string[] ExcludedUriDomains { get; set; }
```

- *Type:* string[]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSans`<sup>Optional</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans"></a>

```csharp
public string[] IpSans { get; set; }
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `IssuerName`<sup>Optional</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName"></a>

```csharp
public string IssuerName { get; set; }
```

- *Type:* string

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits"></a>

```csharp
public double KeyBits { get; set; }
```

- *Type:* double

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `KeyRef`<sup>Optional</sup> <a name="KeyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef"></a>

```csharp
public string KeyRef { get; set; }
```

- *Type:* string

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `ManagedKeyId`<sup>Optional</sup> <a name="ManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId"></a>

```csharp
public string ManagedKeyId { get; set; }
```

- *Type:* string

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `ManagedKeyName`<sup>Optional</sup> <a name="ManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName"></a>

```csharp
public string ManagedKeyName { get; set; }
```

- *Type:* string

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `MaxPathLength`<sup>Optional</sup> <a name="MaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength"></a>

```csharp
public double MaxPathLength { get; set; }
```

- *Type:* double

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `NotAfter`<sup>Optional</sup> <a name="NotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter"></a>

```csharp
public string NotAfter { get; set; }
```

- *Type:* string

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `OtherSans`<sup>Optional</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans"></a>

```csharp
public string[] OtherSans { get; set; }
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `Ou`<sup>Optional</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou"></a>

```csharp
public string Ou { get; set; }
```

- *Type:* string

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `PermittedDnsDomains`<sup>Optional</sup> <a name="PermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains"></a>

```csharp
public string[] PermittedDnsDomains { get; set; }
```

- *Type:* string[]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; set; }
```

- *Type:* string[]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; set; }
```

- *Type:* string[]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `PermittedUriDomains`<sup>Optional</sup> <a name="PermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains"></a>

```csharp
public string[] PermittedUriDomains { get; set; }
```

- *Type:* string[]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `PrivateKeyFormat`<sup>Optional</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat"></a>

```csharp
public string PrivateKeyFormat { get; set; }
```

- *Type:* string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `SignatureBits`<sup>Optional</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits"></a>

```csharp
public double SignatureBits { get; set; }
```

- *Type:* double

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress"></a>

```csharp
public string StreetAddress { get; set; }
```

- *Type:* string

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `UriSans`<sup>Optional</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans"></a>

```csharp
public string[] UriSans { get; set; }
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---



