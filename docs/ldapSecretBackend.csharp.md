# `vault_ldap_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend).

# `ldapSecretBackend` Submodule <a name="`ldapSecretBackend` Submodule" id="@cdktf/provider-vault.ldapSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackend <a name="LdapSecretBackend" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapSecretBackend(Construct Scope, string Id, LdapSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert">ResetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey">ResetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn">ResetUserdn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert"></a>

```csharp
private void ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey"></a>

```csharp
private void ResetClientTlsKey()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetLength` <a name="ResetLength" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength"></a>

```csharp
private void ResetLength()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls"></a>

```csharp
private void ResetStarttls()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain"></a>

```csharp
private void ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr"></a>

```csharp
private void ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn"></a>

```csharp
private void ResetUserdn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LdapSecretBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput">BinddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput">BindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput">LocalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput">StarttlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput">UpndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput">UserattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput">UserdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn">Binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass">Bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local">Local</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap">SealWrap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls">Starttls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain">Upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr">Userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn">Userdn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput"></a>

```csharp
public string BinddnInput { get; }
```

- *Type:* string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput"></a>

```csharp
public string BindpassInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput"></a>

```csharp
public string ClientTlsCertInput { get; }
```

- *Type:* string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput"></a>

```csharp
public string ClientTlsKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput"></a>

```csharp
public object DisableRemountInput { get; }
```

- *Type:* object

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public object ExternalEntropyAccessInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput"></a>

```csharp
public object LocalInput { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput"></a>

```csharp
public object SealWrapInput { get; }
```

- *Type:* object

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput"></a>

```csharp
public object StarttlsInput { get; }
```

- *Type:* object

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput"></a>

```csharp
public string UpndomainInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput"></a>

```csharp
public string UserattrInput { get; }
```

- *Type:* string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput"></a>

```csharp
public string UserdnInput { get; }
```

- *Type:* string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn"></a>

```csharp
public string Binddn { get; }
```

- *Type:* string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass"></a>

```csharp
public string Bindpass { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; }
```

- *Type:* string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; }
```

- *Type:* string

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount"></a>

```csharp
public object DisableRemount { get; }
```

- *Type:* object

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess"></a>

```csharp
public object ExternalEntropyAccess { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local"></a>

```csharp
public object Local { get; }
```

- *Type:* object

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap"></a>

```csharp
public object SealWrap { get; }
```

- *Type:* object

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls"></a>

```csharp
public object Starttls { get; }
```

- *Type:* object

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain"></a>

```csharp
public string Upndomain { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr"></a>

```csharp
public string Userattr { get; }
```

- *Type:* string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn"></a>

```csharp
public string Userdn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendConfig <a name="LdapSecretBackendConfig" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapSecretBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Binddn,
    string Bindpass,
    string[] AllowedManagedKeys = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string Certificate = null,
    string ClientTlsCert = null,
    string ClientTlsKey = null,
    double ConnectionTimeout = null,
    double DefaultLeaseTtlSeconds = null,
    string Description = null,
    object DisableRemount = null,
    object ExternalEntropyAccess = null,
    string Id = null,
    object InsecureTls = null,
    double Length = null,
    object Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string PasswordPolicy = null,
    string Path = null,
    double RequestTimeout = null,
    string Schema = null,
    object SealWrap = null,
    object Starttls = null,
    string Upndomain = null,
    string Url = null,
    string Userattr = null,
    string Userdn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn">Binddn</a></code> | <code>string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass">Bindpass</a></code> | <code>string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate">Certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>object</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>object</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length">Length</a></code> | <code>double</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local">Local</a></code> | <code>object</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema">Schema</a></code> | <code>string</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>object</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls">Starttls</a></code> | <code>object</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url">Url</a></code> | <code>string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr">Userattr</a></code> | <code>string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn">Userdn</a></code> | <code>string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn"></a>

```csharp
public string Binddn { get; set; }
```

- *Type:* string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass"></a>

```csharp
public string Bindpass { get; set; }
```

- *Type:* string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; set; }
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; set; }
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount"></a>

```csharp
public object DisableRemount { get; set; }
```

- *Type:* object

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public object ExternalEntropyAccess { get; set; }
```

- *Type:* object

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `Length`<sup>Optional</sup> <a name="Length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#length LdapSecretBackend#length}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local"></a>

```csharp
public object Local { get; set; }
```

- *Type:* object

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap"></a>

```csharp
public object SealWrap { get; set; }
```

- *Type:* object

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls"></a>

```csharp
public object Starttls { get; set; }
```

- *Type:* object

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; set; }
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr"></a>

```csharp
public string Userattr { get; set; }
```

- *Type:* string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn"></a>

```csharp
public string Userdn { get; set; }
```

- *Type:* string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---



