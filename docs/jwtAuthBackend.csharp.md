# `jwtAuthBackend` Submodule <a name="`jwtAuthBackend` Submodule" id="@cdktf/provider-vault.jwtAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackend <a name="JwtAuthBackend" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackend(Construct Scope, string Id, JwtAuthBackendConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune">PutTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer">ResetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole">ResetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem">ResetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs">ResetJwksPairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl">ResetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs">ResetJwtSupportedAlgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys">ResetJwtValidationPubkeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState">ResetNamespaceInState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId">ResetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret">ResetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem">ResetOidcDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl">ResetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode">ResetOidcResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes">ResetOidcResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune">ResetTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTune` <a name="PutTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune"></a>

```csharp
private void PutTune(IResolvable|JwtAuthBackendTune[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---

##### `ResetBoundIssuer` <a name="ResetBoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer"></a>

```csharp
private void ResetBoundIssuer()
```

##### `ResetDefaultRole` <a name="ResetDefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole"></a>

```csharp
private void ResetDefaultRole()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJwksCaPem` <a name="ResetJwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem"></a>

```csharp
private void ResetJwksCaPem()
```

##### `ResetJwksPairs` <a name="ResetJwksPairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs"></a>

```csharp
private void ResetJwksPairs()
```

##### `ResetJwksUrl` <a name="ResetJwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl"></a>

```csharp
private void ResetJwksUrl()
```

##### `ResetJwtSupportedAlgs` <a name="ResetJwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs"></a>

```csharp
private void ResetJwtSupportedAlgs()
```

##### `ResetJwtValidationPubkeys` <a name="ResetJwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys"></a>

```csharp
private void ResetJwtValidationPubkeys()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNamespaceInState` <a name="ResetNamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState"></a>

```csharp
private void ResetNamespaceInState()
```

##### `ResetOidcClientId` <a name="ResetOidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId"></a>

```csharp
private void ResetOidcClientId()
```

##### `ResetOidcClientSecret` <a name="ResetOidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret"></a>

```csharp
private void ResetOidcClientSecret()
```

##### `ResetOidcDiscoveryCaPem` <a name="ResetOidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem"></a>

```csharp
private void ResetOidcDiscoveryCaPem()
```

##### `ResetOidcDiscoveryUrl` <a name="ResetOidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl"></a>

```csharp
private void ResetOidcDiscoveryUrl()
```

##### `ResetOidcResponseMode` <a name="ResetOidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode"></a>

```csharp
private void ResetOidcResponseMode()
```

##### `ResetOidcResponseTypes` <a name="ResetOidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes"></a>

```csharp
private void ResetOidcResponseTypes()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetTune` <a name="ResetTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune"></a>

```csharp
private void ResetTune()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

JwtAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JwtAuthBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JwtAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JwtAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JwtAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune">Tune</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput">BoundIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput">DefaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput">JwksCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput">JwksPairsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput">JwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput">JwtSupportedAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput">JwtValidationPubkeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput">LocalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput">NamespaceInStateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput">OidcClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput">OidcClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput">OidcDiscoveryCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput">OidcDiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput">OidcResponseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput">OidcResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput">ProviderConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput">TuneInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer">BoundIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole">DefaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem">JwksCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs">JwksPairs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs">JwtSupportedAlgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys">JwtValidationPubkeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState">NamespaceInState</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem">OidcDiscoveryCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode">OidcResponseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes">OidcResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig">ProviderConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Tune`<sup>Required</sup> <a name="Tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune"></a>

```csharp
public JwtAuthBackendTuneList Tune { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a>

---

##### `BoundIssuerInput`<sup>Optional</sup> <a name="BoundIssuerInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput"></a>

```csharp
public string BoundIssuerInput { get; }
```

- *Type:* string

---

##### `DefaultRoleInput`<sup>Optional</sup> <a name="DefaultRoleInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput"></a>

```csharp
public string DefaultRoleInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JwksCaPemInput`<sup>Optional</sup> <a name="JwksCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput"></a>

```csharp
public string JwksCaPemInput { get; }
```

- *Type:* string

---

##### `JwksPairsInput`<sup>Optional</sup> <a name="JwksPairsInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] JwksPairsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput"></a>

```csharp
public string JwksUrlInput { get; }
```

- *Type:* string

---

##### `JwtSupportedAlgsInput`<sup>Optional</sup> <a name="JwtSupportedAlgsInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput"></a>

```csharp
public string[] JwtSupportedAlgsInput { get; }
```

- *Type:* string[]

---

##### `JwtValidationPubkeysInput`<sup>Optional</sup> <a name="JwtValidationPubkeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput"></a>

```csharp
public string[] JwtValidationPubkeysInput { get; }
```

- *Type:* string[]

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NamespaceInStateInput`<sup>Optional</sup> <a name="NamespaceInStateInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput"></a>

```csharp
public bool|IResolvable NamespaceInStateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OidcClientIdInput`<sup>Optional</sup> <a name="OidcClientIdInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput"></a>

```csharp
public string OidcClientIdInput { get; }
```

- *Type:* string

---

##### `OidcClientSecretInput`<sup>Optional</sup> <a name="OidcClientSecretInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput"></a>

```csharp
public string OidcClientSecretInput { get; }
```

- *Type:* string

---

##### `OidcDiscoveryCaPemInput`<sup>Optional</sup> <a name="OidcDiscoveryCaPemInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput"></a>

```csharp
public string OidcDiscoveryCaPemInput { get; }
```

- *Type:* string

---

##### `OidcDiscoveryUrlInput`<sup>Optional</sup> <a name="OidcDiscoveryUrlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput"></a>

```csharp
public string OidcDiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `OidcResponseModeInput`<sup>Optional</sup> <a name="OidcResponseModeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput"></a>

```csharp
public string OidcResponseModeInput { get; }
```

- *Type:* string

---

##### `OidcResponseTypesInput`<sup>Optional</sup> <a name="OidcResponseTypesInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput"></a>

```csharp
public string[] OidcResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TuneInput`<sup>Optional</sup> <a name="TuneInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput"></a>

```csharp
public IResolvable|JwtAuthBackendTune[] TuneInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BoundIssuer`<sup>Required</sup> <a name="BoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer"></a>

```csharp
public string BoundIssuer { get; }
```

- *Type:* string

---

##### `DefaultRole`<sup>Required</sup> <a name="DefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole"></a>

```csharp
public string DefaultRole { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JwksCaPem`<sup>Required</sup> <a name="JwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem"></a>

```csharp
public string JwksCaPem { get; }
```

- *Type:* string

---

##### `JwksPairs`<sup>Required</sup> <a name="JwksPairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] JwksPairs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; }
```

- *Type:* string

---

##### `JwtSupportedAlgs`<sup>Required</sup> <a name="JwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs"></a>

```csharp
public string[] JwtSupportedAlgs { get; }
```

- *Type:* string[]

---

##### `JwtValidationPubkeys`<sup>Required</sup> <a name="JwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys"></a>

```csharp
public string[] JwtValidationPubkeys { get; }
```

- *Type:* string[]

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespaceInState`<sup>Required</sup> <a name="NamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState"></a>

```csharp
public bool|IResolvable NamespaceInState { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OidcClientId`<sup>Required</sup> <a name="OidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId"></a>

```csharp
public string OidcClientId { get; }
```

- *Type:* string

---

##### `OidcClientSecret`<sup>Required</sup> <a name="OidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret"></a>

```csharp
public string OidcClientSecret { get; }
```

- *Type:* string

---

##### `OidcDiscoveryCaPem`<sup>Required</sup> <a name="OidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem"></a>

```csharp
public string OidcDiscoveryCaPem { get; }
```

- *Type:* string

---

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; }
```

- *Type:* string

---

##### `OidcResponseMode`<sup>Required</sup> <a name="OidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode"></a>

```csharp
public string OidcResponseMode { get; }
```

- *Type:* string

---

##### `OidcResponseTypes`<sup>Required</sup> <a name="OidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes"></a>

```csharp
public string[] OidcResponseTypes { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendConfig <a name="JwtAuthBackendConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BoundIssuer = null,
    string DefaultRole = null,
    string Description = null,
    bool|IResolvable DisableRemount = null,
    string Id = null,
    string JwksCaPem = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] JwksPairs = null,
    string JwksUrl = null,
    string[] JwtSupportedAlgs = null,
    string[] JwtValidationPubkeys = null,
    bool|IResolvable Local = null,
    string Namespace = null,
    bool|IResolvable NamespaceInState = null,
    string OidcClientId = null,
    string OidcClientSecret = null,
    string OidcDiscoveryCaPem = null,
    string OidcDiscoveryUrl = null,
    string OidcResponseMode = null,
    string[] OidcResponseTypes = null,
    string Path = null,
    System.Collections.Generic.IDictionary<string, string> ProviderConfig = null,
    IResolvable|JwtAuthBackendTune[] Tune = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer">BoundIssuer</a></code> | <code>string</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole">DefaultRole</a></code> | <code>string</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description">Description</a></code> | <code>string</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem">JwksCaPem</a></code> | <code>string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs">JwksPairs</a></code> | <code>HashiCorp.Cdktf.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs">JwtSupportedAlgs</a></code> | <code>string[]</code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys">JwtValidationPubkeys</a></code> | <code>string[]</code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local">Local</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState">NamespaceInState</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId">OidcClientId</a></code> | <code>string</code> | Client ID used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret">OidcClientSecret</a></code> | <code>string</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem">OidcDiscoveryCaPem</a></code> | <code>string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>string</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode">OidcResponseMode</a></code> | <code>string</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes">OidcResponseTypes</a></code> | <code>string[]</code> | The response types to request. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig">ProviderConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Provider specific handling configuration. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune">Tune</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type">Type</a></code> | <code>string</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BoundIssuer`<sup>Optional</sup> <a name="BoundIssuer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer"></a>

```csharp
public string BoundIssuer { get; set; }
```

- *Type:* string

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `DefaultRole`<sup>Optional</sup> <a name="DefaultRole" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole"></a>

```csharp
public string DefaultRole { get; set; }
```

- *Type:* string

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JwksCaPem`<sup>Optional</sup> <a name="JwksCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem"></a>

```csharp
public string JwksCaPem { get; set; }
```

- *Type:* string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `JwksPairs`<sup>Optional</sup> <a name="JwksPairs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] JwksPairs { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#jwks_pairs JwtAuthBackend#jwks_pairs}

---

##### `JwksUrl`<sup>Optional</sup> <a name="JwksUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; set; }
```

- *Type:* string

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `JwtSupportedAlgs`<sup>Optional</sup> <a name="JwtSupportedAlgs" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs"></a>

```csharp
public string[] JwtSupportedAlgs { get; set; }
```

- *Type:* string[]

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `JwtValidationPubkeys`<sup>Optional</sup> <a name="JwtValidationPubkeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys"></a>

```csharp
public string[] JwtValidationPubkeys { get; set; }
```

- *Type:* string[]

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `NamespaceInState`<sup>Optional</sup> <a name="NamespaceInState" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState"></a>

```csharp
public bool|IResolvable NamespaceInState { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `OidcClientId`<sup>Optional</sup> <a name="OidcClientId" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId"></a>

```csharp
public string OidcClientId { get; set; }
```

- *Type:* string

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `OidcClientSecret`<sup>Optional</sup> <a name="OidcClientSecret" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret"></a>

```csharp
public string OidcClientSecret { get; set; }
```

- *Type:* string

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `OidcDiscoveryCaPem`<sup>Optional</sup> <a name="OidcDiscoveryCaPem" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem"></a>

```csharp
public string OidcDiscoveryCaPem { get; set; }
```

- *Type:* string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `OidcDiscoveryUrl`<sup>Optional</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl"></a>

```csharp
public string OidcDiscoveryUrl { get; set; }
```

- *Type:* string

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `OidcResponseMode`<sup>Optional</sup> <a name="OidcResponseMode" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode"></a>

```csharp
public string OidcResponseMode { get; set; }
```

- *Type:* string

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `OidcResponseTypes`<sup>Optional</sup> <a name="OidcResponseTypes" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes"></a>

```csharp
public string[] OidcResponseTypes { get; set; }
```

- *Type:* string[]

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `Tune`<sup>Optional</sup> <a name="Tune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune"></a>

```csharp
public IResolvable|JwtAuthBackendTune[] Tune { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

### JwtAuthBackendTune <a name="JwtAuthBackendTune" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendTune {
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
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}. |

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}.

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}.

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}.

---

##### `DefaultLeaseTtl`<sup>Optional</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}.

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}.

---

##### `MaxLeaseTtl`<sup>Optional</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}.

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}.

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### JwtAuthBackendTuneList <a name="JwtAuthBackendTuneList" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendTuneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get"></a>

```csharp
private JwtAuthBackendTuneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue"></a>

```csharp
public IResolvable|JwtAuthBackendTune[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---


### JwtAuthBackendTuneOutputReference <a name="JwtAuthBackendTuneOutputReference" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new JwtAuthBackendTuneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl">ResetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl">ResetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtl` <a name="ResetDefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```csharp
private void ResetDefaultLeaseTtl()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetMaxLeaseTtl` <a name="ResetMaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```csharp
private void ResetMaxLeaseTtl()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">DefaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput">MaxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl">DefaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl">MaxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlInput`<sup>Optional</sup> <a name="DefaultLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```csharp
public string DefaultLeaseTtlInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `MaxLeaseTtlInput`<sup>Optional</sup> <a name="MaxLeaseTtlInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```csharp
public string MaxLeaseTtlInput { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtl`<sup>Required</sup> <a name="DefaultLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```csharp
public string DefaultLeaseTtl { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `MaxLeaseTtl`<sup>Required</sup> <a name="MaxLeaseTtl" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```csharp
public string MaxLeaseTtl { get; }
```

- *Type:* string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|JwtAuthBackendTune InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>

---



