# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktf/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KmipSecretRole(Construct Scope, string Id, KmipSecretRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">ResetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">ResetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">ResetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">ResetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">ResetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">ResetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">ResetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">ResetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">ResetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">ResetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">ResetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">ResetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">ResetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">ResetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">ResetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">ResetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">ResetTlsClientTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOperationActivate` <a name="ResetOperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```csharp
private void ResetOperationActivate()
```

##### `ResetOperationAddAttribute` <a name="ResetOperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```csharp
private void ResetOperationAddAttribute()
```

##### `ResetOperationAll` <a name="ResetOperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```csharp
private void ResetOperationAll()
```

##### `ResetOperationCreate` <a name="ResetOperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```csharp
private void ResetOperationCreate()
```

##### `ResetOperationDestroy` <a name="ResetOperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```csharp
private void ResetOperationDestroy()
```

##### `ResetOperationDiscoverVersions` <a name="ResetOperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```csharp
private void ResetOperationDiscoverVersions()
```

##### `ResetOperationGet` <a name="ResetOperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```csharp
private void ResetOperationGet()
```

##### `ResetOperationGetAttributeList` <a name="ResetOperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```csharp
private void ResetOperationGetAttributeList()
```

##### `ResetOperationGetAttributes` <a name="ResetOperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```csharp
private void ResetOperationGetAttributes()
```

##### `ResetOperationLocate` <a name="ResetOperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```csharp
private void ResetOperationLocate()
```

##### `ResetOperationNone` <a name="ResetOperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```csharp
private void ResetOperationNone()
```

##### `ResetOperationRegister` <a name="ResetOperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```csharp
private void ResetOperationRegister()
```

##### `ResetOperationRekey` <a name="ResetOperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```csharp
private void ResetOperationRekey()
```

##### `ResetOperationRevoke` <a name="ResetOperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```csharp
private void ResetOperationRevoke()
```

##### `ResetTlsClientKeyBits` <a name="ResetTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```csharp
private void ResetTlsClientKeyBits()
```

##### `ResetTlsClientKeyType` <a name="ResetTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```csharp
private void ResetTlsClientKeyType()
```

##### `ResetTlsClientTtl` <a name="ResetTlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```csharp
private void ResetTlsClientTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KmipSecretRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KmipSecretRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KmipSecretRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KmipSecretRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KmipSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">OperationActivateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">OperationAddAttributeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">OperationAllInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">OperationCreateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">OperationDestroyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">OperationDiscoverVersionsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">OperationGetAttributeListInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">OperationGetAttributesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">OperationGetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">OperationLocateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">OperationNoneInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">OperationRegisterInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">OperationRekeyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">OperationRevokeInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">TlsClientKeyBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">TlsClientKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">TlsClientTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">OperationActivate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">OperationAddAttribute</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">OperationAll</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">OperationCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">OperationDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">OperationDiscoverVersions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">OperationGet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">OperationGetAttributeList</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">OperationGetAttributes</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">OperationLocate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">OperationNone</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">OperationRegister</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">OperationRekey</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">OperationRevoke</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">TlsClientKeyBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">TlsClientKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">TlsClientTtl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OperationActivateInput`<sup>Optional</sup> <a name="OperationActivateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```csharp
public bool|IResolvable OperationActivateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationAddAttributeInput`<sup>Optional</sup> <a name="OperationAddAttributeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```csharp
public bool|IResolvable OperationAddAttributeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationAllInput`<sup>Optional</sup> <a name="OperationAllInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```csharp
public bool|IResolvable OperationAllInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationCreateInput`<sup>Optional</sup> <a name="OperationCreateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```csharp
public bool|IResolvable OperationCreateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationDestroyInput`<sup>Optional</sup> <a name="OperationDestroyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```csharp
public bool|IResolvable OperationDestroyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationDiscoverVersionsInput`<sup>Optional</sup> <a name="OperationDiscoverVersionsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```csharp
public bool|IResolvable OperationDiscoverVersionsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGetAttributeListInput`<sup>Optional</sup> <a name="OperationGetAttributeListInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```csharp
public bool|IResolvable OperationGetAttributeListInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGetAttributesInput`<sup>Optional</sup> <a name="OperationGetAttributesInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```csharp
public bool|IResolvable OperationGetAttributesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGetInput`<sup>Optional</sup> <a name="OperationGetInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```csharp
public bool|IResolvable OperationGetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationLocateInput`<sup>Optional</sup> <a name="OperationLocateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```csharp
public bool|IResolvable OperationLocateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationNoneInput`<sup>Optional</sup> <a name="OperationNoneInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```csharp
public bool|IResolvable OperationNoneInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRegisterInput`<sup>Optional</sup> <a name="OperationRegisterInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```csharp
public bool|IResolvable OperationRegisterInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRekeyInput`<sup>Optional</sup> <a name="OperationRekeyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```csharp
public bool|IResolvable OperationRekeyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRevokeInput`<sup>Optional</sup> <a name="OperationRevokeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```csharp
public bool|IResolvable OperationRevokeInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TlsClientKeyBitsInput`<sup>Optional</sup> <a name="TlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```csharp
public double TlsClientKeyBitsInput { get; }
```

- *Type:* double

---

##### `TlsClientKeyTypeInput`<sup>Optional</sup> <a name="TlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```csharp
public string TlsClientKeyTypeInput { get; }
```

- *Type:* string

---

##### `TlsClientTtlInput`<sup>Optional</sup> <a name="TlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```csharp
public double TlsClientTtlInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OperationActivate`<sup>Required</sup> <a name="OperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```csharp
public bool|IResolvable OperationActivate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationAddAttribute`<sup>Required</sup> <a name="OperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```csharp
public bool|IResolvable OperationAddAttribute { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationAll`<sup>Required</sup> <a name="OperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```csharp
public bool|IResolvable OperationAll { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationCreate`<sup>Required</sup> <a name="OperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```csharp
public bool|IResolvable OperationCreate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationDestroy`<sup>Required</sup> <a name="OperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```csharp
public bool|IResolvable OperationDestroy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationDiscoverVersions`<sup>Required</sup> <a name="OperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```csharp
public bool|IResolvable OperationDiscoverVersions { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGet`<sup>Required</sup> <a name="OperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```csharp
public bool|IResolvable OperationGet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGetAttributeList`<sup>Required</sup> <a name="OperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```csharp
public bool|IResolvable OperationGetAttributeList { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationGetAttributes`<sup>Required</sup> <a name="OperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```csharp
public bool|IResolvable OperationGetAttributes { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationLocate`<sup>Required</sup> <a name="OperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```csharp
public bool|IResolvable OperationLocate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationNone`<sup>Required</sup> <a name="OperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```csharp
public bool|IResolvable OperationNone { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRegister`<sup>Required</sup> <a name="OperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```csharp
public bool|IResolvable OperationRegister { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRekey`<sup>Required</sup> <a name="OperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```csharp
public bool|IResolvable OperationRekey { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OperationRevoke`<sup>Required</sup> <a name="OperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```csharp
public bool|IResolvable OperationRevoke { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TlsClientKeyBits`<sup>Required</sup> <a name="TlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```csharp
public double TlsClientKeyBits { get; }
```

- *Type:* double

---

##### `TlsClientKeyType`<sup>Required</sup> <a name="TlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```csharp
public string TlsClientKeyType { get; }
```

- *Type:* string

---

##### `TlsClientTtl`<sup>Required</sup> <a name="TlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```csharp
public double TlsClientTtl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KmipSecretRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Path,
    string Role,
    string Scope,
    string Id = null,
    string Namespace = null,
    bool|IResolvable OperationActivate = null,
    bool|IResolvable OperationAddAttribute = null,
    bool|IResolvable OperationAll = null,
    bool|IResolvable OperationCreate = null,
    bool|IResolvable OperationDestroy = null,
    bool|IResolvable OperationDiscoverVersions = null,
    bool|IResolvable OperationGet = null,
    bool|IResolvable OperationGetAttributeList = null,
    bool|IResolvable OperationGetAttributes = null,
    bool|IResolvable OperationLocate = null,
    bool|IResolvable OperationNone = null,
    bool|IResolvable OperationRegister = null,
    bool|IResolvable OperationRekey = null,
    bool|IResolvable OperationRevoke = null,
    double TlsClientKeyBits = null,
    string TlsClientKeyType = null,
    double TlsClientTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">Path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">Role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">Scope</a></code> | <code>string</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">OperationActivate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">OperationAddAttribute</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">OperationAll</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">OperationCreate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">OperationDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">OperationDiscoverVersions</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">OperationGet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">OperationGetAttributeList</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">OperationGetAttributes</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">OperationLocate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">OperationNone</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">OperationRegister</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">OperationRekey</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">OperationRevoke</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">TlsClientKeyBits</a></code> | <code>double</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">TlsClientKeyType</a></code> | <code>string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">TlsClientTtl</a></code> | <code>double</code> | Client certificate TTL in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `OperationActivate`<sup>Optional</sup> <a name="OperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```csharp
public bool|IResolvable OperationActivate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `OperationAddAttribute`<sup>Optional</sup> <a name="OperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```csharp
public bool|IResolvable OperationAddAttribute { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `OperationAll`<sup>Optional</sup> <a name="OperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```csharp
public bool|IResolvable OperationAll { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `OperationCreate`<sup>Optional</sup> <a name="OperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```csharp
public bool|IResolvable OperationCreate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `OperationDestroy`<sup>Optional</sup> <a name="OperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```csharp
public bool|IResolvable OperationDestroy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `OperationDiscoverVersions`<sup>Optional</sup> <a name="OperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```csharp
public bool|IResolvable OperationDiscoverVersions { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `OperationGet`<sup>Optional</sup> <a name="OperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```csharp
public bool|IResolvable OperationGet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `OperationGetAttributeList`<sup>Optional</sup> <a name="OperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```csharp
public bool|IResolvable OperationGetAttributeList { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `OperationGetAttributes`<sup>Optional</sup> <a name="OperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```csharp
public bool|IResolvable OperationGetAttributes { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `OperationLocate`<sup>Optional</sup> <a name="OperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```csharp
public bool|IResolvable OperationLocate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `OperationNone`<sup>Optional</sup> <a name="OperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```csharp
public bool|IResolvable OperationNone { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `OperationRegister`<sup>Optional</sup> <a name="OperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```csharp
public bool|IResolvable OperationRegister { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `OperationRekey`<sup>Optional</sup> <a name="OperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```csharp
public bool|IResolvable OperationRekey { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `OperationRevoke`<sup>Optional</sup> <a name="OperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```csharp
public bool|IResolvable OperationRevoke { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `TlsClientKeyBits`<sup>Optional</sup> <a name="TlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```csharp
public double TlsClientKeyBits { get; set; }
```

- *Type:* double

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `TlsClientKeyType`<sup>Optional</sup> <a name="TlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```csharp
public string TlsClientKeyType { get; set; }
```

- *Type:* string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `TlsClientTtl`<sup>Optional</sup> <a name="TlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```csharp
public double TlsClientTtl { get; set; }
```

- *Type:* double

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



