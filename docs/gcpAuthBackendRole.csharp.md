# `gcpAuthBackendRole` Submodule <a name="`gcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.gcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackendRole <a name="GcpAuthBackendRole" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackendRole(Construct Scope, string Id, GcpAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig">GcpAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig">GcpAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases">ResetAddGroupAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference">ResetAllowGceInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups">ResetBoundInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels">ResetBoundLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects">ResetBoundProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions">ResetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts">ResetBoundServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones">ResetBoundZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp">ResetMaxJwtExp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddGroupAliases` <a name="ResetAddGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases"></a>

```csharp
private void ResetAddGroupAliases()
```

##### `ResetAllowGceInference` <a name="ResetAllowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference"></a>

```csharp
private void ResetAllowGceInference()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetBoundInstanceGroups` <a name="ResetBoundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups"></a>

```csharp
private void ResetBoundInstanceGroups()
```

##### `ResetBoundLabels` <a name="ResetBoundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels"></a>

```csharp
private void ResetBoundLabels()
```

##### `ResetBoundProjects` <a name="ResetBoundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects"></a>

```csharp
private void ResetBoundProjects()
```

##### `ResetBoundRegions` <a name="ResetBoundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions"></a>

```csharp
private void ResetBoundRegions()
```

##### `ResetBoundServiceAccounts` <a name="ResetBoundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts"></a>

```csharp
private void ResetBoundServiceAccounts()
```

##### `ResetBoundZones` <a name="ResetBoundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones"></a>

```csharp
private void ResetBoundZones()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxJwtExp` <a name="ResetMaxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp"></a>

```csharp
private void ResetMaxJwtExp()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GcpAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GcpAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GcpAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput">AddGroupAliasesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput">AllowGceInferenceInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput">BoundInstanceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput">BoundLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput">BoundProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput">BoundRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput">BoundServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput">BoundZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput">MaxJwtExpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases">AddGroupAliases</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference">AllowGceInference</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups">BoundInstanceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels">BoundLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects">BoundProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions">BoundRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts">BoundServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones">BoundZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp">MaxJwtExp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AddGroupAliasesInput`<sup>Optional</sup> <a name="AddGroupAliasesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput"></a>

```csharp
public bool|IResolvable AddGroupAliasesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowGceInferenceInput`<sup>Optional</sup> <a name="AllowGceInferenceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput"></a>

```csharp
public bool|IResolvable AllowGceInferenceInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BoundInstanceGroupsInput`<sup>Optional</sup> <a name="BoundInstanceGroupsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput"></a>

```csharp
public string[] BoundInstanceGroupsInput { get; }
```

- *Type:* string[]

---

##### `BoundLabelsInput`<sup>Optional</sup> <a name="BoundLabelsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput"></a>

```csharp
public string[] BoundLabelsInput { get; }
```

- *Type:* string[]

---

##### `BoundProjectsInput`<sup>Optional</sup> <a name="BoundProjectsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput"></a>

```csharp
public string[] BoundProjectsInput { get; }
```

- *Type:* string[]

---

##### `BoundRegionsInput`<sup>Optional</sup> <a name="BoundRegionsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput"></a>

```csharp
public string[] BoundRegionsInput { get; }
```

- *Type:* string[]

---

##### `BoundServiceAccountsInput`<sup>Optional</sup> <a name="BoundServiceAccountsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput"></a>

```csharp
public string[] BoundServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `BoundZonesInput`<sup>Optional</sup> <a name="BoundZonesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput"></a>

```csharp
public string[] BoundZonesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxJwtExpInput`<sup>Optional</sup> <a name="MaxJwtExpInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput"></a>

```csharp
public string MaxJwtExpInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AddGroupAliases`<sup>Required</sup> <a name="AddGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases"></a>

```csharp
public bool|IResolvable AddGroupAliases { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowGceInference`<sup>Required</sup> <a name="AllowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference"></a>

```csharp
public bool|IResolvable AllowGceInference { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BoundInstanceGroups`<sup>Required</sup> <a name="BoundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups"></a>

```csharp
public string[] BoundInstanceGroups { get; }
```

- *Type:* string[]

---

##### `BoundLabels`<sup>Required</sup> <a name="BoundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels"></a>

```csharp
public string[] BoundLabels { get; }
```

- *Type:* string[]

---

##### `BoundProjects`<sup>Required</sup> <a name="BoundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects"></a>

```csharp
public string[] BoundProjects { get; }
```

- *Type:* string[]

---

##### `BoundRegions`<sup>Required</sup> <a name="BoundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions"></a>

```csharp
public string[] BoundRegions { get; }
```

- *Type:* string[]

---

##### `BoundServiceAccounts`<sup>Required</sup> <a name="BoundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts"></a>

```csharp
public string[] BoundServiceAccounts { get; }
```

- *Type:* string[]

---

##### `BoundZones`<sup>Required</sup> <a name="BoundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones"></a>

```csharp
public string[] BoundZones { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxJwtExp`<sup>Required</sup> <a name="MaxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp"></a>

```csharp
public string MaxJwtExp { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendRoleConfig <a name="GcpAuthBackendRoleConfig" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Role,
    string Type,
    bool|IResolvable AddGroupAliases = null,
    bool|IResolvable AllowGceInference = null,
    string Backend = null,
    string[] BoundInstanceGroups = null,
    string[] BoundLabels = null,
    string[] BoundProjects = null,
    string[] BoundRegions = null,
    string[] BoundServiceAccounts = null,
    string[] BoundZones = null,
    string Id = null,
    string MaxJwtExp = null,
    string Namespace = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases">AddGroupAliases</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference">AllowGceInference</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups">BoundInstanceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels">BoundLabels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects">BoundProjects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions">BoundRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts">BoundServiceAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones">BoundZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp">MaxJwtExp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `AddGroupAliases`<sup>Optional</sup> <a name="AddGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases"></a>

```csharp
public bool|IResolvable AddGroupAliases { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `AllowGceInference`<sup>Optional</sup> <a name="AllowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference"></a>

```csharp
public bool|IResolvable AllowGceInference { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `BoundInstanceGroups`<sup>Optional</sup> <a name="BoundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups"></a>

```csharp
public string[] BoundInstanceGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `BoundLabels`<sup>Optional</sup> <a name="BoundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels"></a>

```csharp
public string[] BoundLabels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `BoundProjects`<sup>Optional</sup> <a name="BoundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects"></a>

```csharp
public string[] BoundProjects { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `BoundRegions`<sup>Optional</sup> <a name="BoundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions"></a>

```csharp
public string[] BoundRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `BoundServiceAccounts`<sup>Optional</sup> <a name="BoundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts"></a>

```csharp
public string[] BoundServiceAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `BoundZones`<sup>Optional</sup> <a name="BoundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones"></a>

```csharp
public string[] BoundZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxJwtExp`<sup>Optional</sup> <a name="MaxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp"></a>

```csharp
public string MaxJwtExp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---



