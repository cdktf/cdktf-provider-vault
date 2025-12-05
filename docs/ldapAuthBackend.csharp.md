# `ldapAuthBackend` Submodule <a name="`ldapAuthBackend` Submodule" id="@cdktf/provider-vault.ldapAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackend <a name="LdapAuthBackend" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapAuthBackend(Construct Scope, string Id, LdapAuthBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch">ResetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn">ResetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass">ResetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert">ResetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey">ResetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind">ResetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases">ResetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn">ResetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin">ResetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize">ResetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn">ResetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter">ResetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias">ResetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune"></a>

```csharp
private void PutTune(IResolvable|LdapAuthBackendTune[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch"></a>

```csharp
private void ResetAnonymousGroupSearch()
```

##### `ResetBinddn` <a name="ResetBinddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn"></a>

```csharp
private void ResetBinddn()
```

##### `ResetBindpass` <a name="ResetBindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass"></a>

```csharp
private void ResetBindpass()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames"></a>

```csharp
private void ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert"></a>

```csharp
private void ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey"></a>

```csharp
private void ResetClientTlsKey()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind"></a>

```csharp
private void ResetDenyNullBind()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases"></a>

```csharp
private void ResetDereferenceAliases()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn"></a>

```csharp
private void ResetDiscoverdn()
```

##### `ResetEnableSamaccountnameLogin` <a name="ResetEnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin"></a>

```csharp
private void ResetEnableSamaccountnameLogin()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr"></a>

```csharp
private void ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn"></a>

```csharp
private void ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter"></a>

```csharp
private void ResetGroupfilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxPageSize` <a name="ResetMaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize"></a>

```csharp
private void ResetMaxPageSize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls"></a>

```csharp
private void ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion"></a>

```csharp
private void ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetTune` <a name="ResetTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune"></a>

```csharp
private void ResetTune()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain"></a>

```csharp
private void ResetUpndomain()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr"></a>

```csharp
private void ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn"></a>

```csharp
private void ResetUserdn()
```

##### `ResetUserfilter` <a name="ResetUserfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter"></a>

```csharp
private void ResetUserfilter()
```

##### `ResetUsernameAsAlias` <a name="ResetUsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias"></a>

```csharp
private void ResetUsernameAsAlias()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups"></a>

```csharp
private void ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

LdapAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LdapAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput">BinddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput">BindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput">DiscoverdnInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput">EnableSamaccountnameLoginInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput">GroupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput">GroupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput">GroupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput">LocalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput">MaxPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput">StarttlsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput">TuneInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput">UpndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput">UserattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput">UserdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput">UserfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput">UsernameAsAliasInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn">Binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass">Bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind">DenyNullBind</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn">Discoverdn</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr">Groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn">Groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter">Groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls">InsecureTls</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize">MaxPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls">Starttls</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain">Upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr">Userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn">Userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter">Userfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups">UseTokenGroups</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune"></a>

```csharp
public LdapAuthBackendTuneList Tune { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a>

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput"></a>

```csharp
public bool|IResolvable AnonymousGroupSearchInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput"></a>

```csharp
public string BinddnInput { get; }
```

- *Type:* string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput"></a>

```csharp
public string BindpassInput { get; }
```

- *Type:* string

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput"></a>

```csharp
public bool|IResolvable CaseSensitiveNamesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput"></a>

```csharp
public string ClientTlsCertInput { get; }
```

- *Type:* string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput"></a>

```csharp
public string ClientTlsKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput"></a>

```csharp
public bool|IResolvable DenyNullBindInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput"></a>

```csharp
public string DereferenceAliasesInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput"></a>

```csharp
public bool|IResolvable DiscoverdnInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableSamaccountnameLoginInput`<sup>Optional</sup> <a name="EnableSamaccountnameLoginInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLoginInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput"></a>

```csharp
public string GroupattrInput { get; }
```

- *Type:* string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput"></a>

```csharp
public string GroupdnInput { get; }
```

- *Type:* string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput"></a>

```csharp
public string GroupfilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput"></a>

```csharp
public bool|IResolvable InsecureTlsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxPageSizeInput`<sup>Optional</sup> <a name="MaxPageSizeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput"></a>

```csharp
public double MaxPageSizeInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput"></a>

```csharp
public bool|IResolvable StarttlsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput"></a>

```csharp
public string TlsMaxVersionInput { get; }
```

- *Type:* string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput"></a>

```csharp
public IResolvable|LdapAuthBackendTune[] TuneInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput"></a>

```csharp
public string UpndomainInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput"></a>

```csharp
public string UserattrInput { get; }
```

- *Type:* string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput"></a>

```csharp
public string UserdnInput { get; }
```

- *Type:* string

---

##### `UserfilterInput`<sup>Optional</sup> <a name="UserfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput"></a>

```csharp
public string UserfilterInput { get; }
```

- *Type:* string

---

##### `UsernameAsAliasInput`<sup>Optional</sup> <a name="UsernameAsAliasInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput"></a>

```csharp
public bool|IResolvable UsernameAsAliasInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput"></a>

```csharp
public bool|IResolvable UseTokenGroupsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch"></a>

```csharp
public bool|IResolvable AnonymousGroupSearch { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn"></a>

```csharp
public string Binddn { get; }
```

- *Type:* string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass"></a>

```csharp
public string Bindpass { get; }
```

- *Type:* string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; }
```

- *Type:* string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; }
```

- *Type:* string

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind"></a>

```csharp
public bool|IResolvable DenyNullBind { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn"></a>

```csharp
public bool|IResolvable Discoverdn { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableSamaccountnameLogin`<sup>Required</sup> <a name="EnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLogin { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr"></a>

```csharp
public string Groupattr { get; }
```

- *Type:* string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn"></a>

```csharp
public string Groupdn { get; }
```

- *Type:* string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter"></a>

```csharp
public string Groupfilter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxPageSize`<sup>Required</sup> <a name="MaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize"></a>

```csharp
public double MaxPageSize { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain"></a>

```csharp
public string Upndomain { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr"></a>

```csharp
public string Userattr { get; }
```

- *Type:* string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn"></a>

```csharp
public string Userdn { get; }
```

- *Type:* string

---

##### `Userfilter`<sup>Required</sup> <a name="Userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter"></a>

```csharp
public string Userfilter { get; }
```

- *Type:* string

---

##### `UsernameAsAlias`<sup>Required</sup> <a name="UsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias"></a>

```csharp
public bool|IResolvable UsernameAsAlias { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups"></a>

```csharp
public bool|IResolvable UseTokenGroups { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendConfig <a name="LdapAuthBackendConfig" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Url,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    bool|IResolvable AnonymousGroupSearch = null,
    string Binddn = null,
    string Bindpass = null,
    bool|IResolvable CaseSensitiveNames = null,
    string Certificate = null,
    string ClientTlsCert = null,
    string ClientTlsKey = null,
    double ConnectionTimeout = null,
    bool|IResolvable DenyNullBind = null,
    string DereferenceAliases = null,
    string Description = null,
    bool|IResolvable DisableAutomatedRotation = null,
    bool|IResolvable DisableRemount = null,
    bool|IResolvable Discoverdn = null,
    bool|IResolvable EnableSamaccountnameLogin = null,
    string Groupattr = null,
    string Groupdn = null,
    string Groupfilter = null,
    string Id = null,
    bool|IResolvable InsecureTls = null,
    bool|IResolvable Local = null,
    double MaxPageSize = null,
    string Namespace = null,
    string Path = null,
    double RequestTimeout = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    bool|IResolvable Starttls = null,
    string TlsMaxVersion = null,
    string TlsMinVersion = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    IResolvable|LdapAuthBackendTune[] Tune = null,
    string Upndomain = null,
    string Userattr = null,
    string Userdn = null,
    string Userfilter = null,
    bool|IResolvable UsernameAsAlias = null,
    bool|IResolvable UseTokenGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Allows anonymous group searches. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn">Binddn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass">Bindpass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind">DenyNullBind</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn">Discoverdn</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enables login using the sAMAccountName attribute. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr">Groupattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn">Groupdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter">Groupfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize">MaxPageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | The timeout(in sec) for requests to the LDAP server. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls">Starttls</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune">Tune</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr">Userattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn">Userdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter">Userfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#alias_metadata LdapAuthBackend#alias_metadata}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch"></a>

```csharp
public bool|IResolvable AnonymousGroupSearch { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Allows anonymous group searches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#anonymous_group_search LdapAuthBackend#anonymous_group_search}

---

##### `Binddn`<sup>Optional</sup> <a name="Binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn"></a>

```csharp
public string Binddn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `Bindpass`<sup>Optional</sup> <a name="Bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass"></a>

```csharp
public string Bindpass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}.

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind"></a>

```csharp
public bool|IResolvable DenyNullBind { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; set; }
```

- *Type:* string

Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#dereference_aliases LdapAuthBackend#dereference_aliases}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#disable_automated_rotation LdapAuthBackend#disable_automated_rotation}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn"></a>

```csharp
public bool|IResolvable Discoverdn { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `EnableSamaccountnameLogin`<sup>Optional</sup> <a name="EnableSamaccountnameLogin" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLogin { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enables login using the sAMAccountName attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#enable_samaccountname_login LdapAuthBackend#enable_samaccountname_login}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr"></a>

```csharp
public string Groupattr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn"></a>

```csharp
public string Groupdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter"></a>

```csharp
public string Groupfilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `MaxPageSize`<sup>Optional</sup> <a name="MaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize"></a>

```csharp
public double MaxPageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

The timeout(in sec) for requests to the LDAP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#request_timeout LdapAuthBackend#request_timeout}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_period LdapAuthBackend#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_schedule LdapAuthBackend#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#rotation_window LdapAuthBackend#rotation_window}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune"></a>

```csharp
public IResolvable|LdapAuthBackendTune[] Tune { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}.

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr"></a>

```csharp
public string Userattr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn"></a>

```csharp
public string Userdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `Userfilter`<sup>Optional</sup> <a name="Userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter"></a>

```csharp
public string Userfilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `UsernameAsAlias`<sup>Optional</sup> <a name="UsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias"></a>

```csharp
public bool|IResolvable UsernameAsAlias { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups"></a>

```csharp
public bool|IResolvable UseTokenGroups { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---

### LdapAuthBackendTune <a name="LdapAuthBackendTune" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapAuthBackendTune {
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string DefaultLeaseTtl = null,
    string ListingVisibility = null,
    string MaxLeaseTtl = null,
    string[] PassthroughRequestHeaders = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapAuthBackendTuneList <a name="LdapAuthBackendTuneList" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapAuthBackendTuneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get"></a>

```csharp
private LdapAuthBackendTuneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue"></a>

```csharp
public IResolvable|LdapAuthBackendTune[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---


### LdapAuthBackendTuneOutputReference <a name="LdapAuthBackendTuneOutputReference" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new LdapAuthBackendTuneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```csharp
private void ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```csharp
private void ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```csharp
public string DefaultLeaseTtlInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```csharp
public string MaxLeaseTtlInput { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LdapAuthBackendTune InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>

---



