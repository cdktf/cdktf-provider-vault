# `sshSecretBackendRole` Submodule <a name="`sshSecretBackendRole` Submodule" id="@cdktf/provider-vault.sshSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendRole <a name="SshSecretBackendRole" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role vault_ssh_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendRole(Construct Scope, string Id, SshSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig">PutAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner">ResetAlgorithmSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains">ResetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions">ResetAllowedCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions">ResetAllowedExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig">ResetAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths">ResetAllowedUserKeyLengths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers">ResetAllowedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate">ResetAllowedUsersTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates">ResetAllowHostCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains">ResetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates">ResetAllowUserCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds">ResetAllowUserKeyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions">ResetDefaultCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions">ResetDefaultExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser">ResetDefaultUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate">ResetDefaultUserTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat">ResetKeyIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAllowedUserKeyConfig` <a name="PutAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig"></a>

```csharp
private void PutAllowedUserKeyConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAlgorithmSigner` <a name="ResetAlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner"></a>

```csharp
private void ResetAlgorithmSigner()
```

##### `ResetAllowBareDomains` <a name="ResetAllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains"></a>

```csharp
private void ResetAllowBareDomains()
```

##### `ResetAllowedCriticalOptions` <a name="ResetAllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions"></a>

```csharp
private void ResetAllowedCriticalOptions()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains"></a>

```csharp
private void ResetAllowedDomains()
```

##### `ResetAllowedExtensions` <a name="ResetAllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions"></a>

```csharp
private void ResetAllowedExtensions()
```

##### `ResetAllowedUserKeyConfig` <a name="ResetAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig"></a>

```csharp
private void ResetAllowedUserKeyConfig()
```

##### `ResetAllowedUserKeyLengths` <a name="ResetAllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths"></a>

```csharp
private void ResetAllowedUserKeyLengths()
```

##### `ResetAllowedUsers` <a name="ResetAllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers"></a>

```csharp
private void ResetAllowedUsers()
```

##### `ResetAllowedUsersTemplate` <a name="ResetAllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate"></a>

```csharp
private void ResetAllowedUsersTemplate()
```

##### `ResetAllowHostCertificates` <a name="ResetAllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates"></a>

```csharp
private void ResetAllowHostCertificates()
```

##### `ResetAllowSubdomains` <a name="ResetAllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains"></a>

```csharp
private void ResetAllowSubdomains()
```

##### `ResetAllowUserCertificates` <a name="ResetAllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates"></a>

```csharp
private void ResetAllowUserCertificates()
```

##### `ResetAllowUserKeyIds` <a name="ResetAllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds"></a>

```csharp
private void ResetAllowUserKeyIds()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList"></a>

```csharp
private void ResetCidrList()
```

##### `ResetDefaultCriticalOptions` <a name="ResetDefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions"></a>

```csharp
private void ResetDefaultCriticalOptions()
```

##### `ResetDefaultExtensions` <a name="ResetDefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions"></a>

```csharp
private void ResetDefaultExtensions()
```

##### `ResetDefaultUser` <a name="ResetDefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser"></a>

```csharp
private void ResetDefaultUser()
```

##### `ResetDefaultUserTemplate` <a name="ResetDefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate"></a>

```csharp
private void ResetDefaultUserTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyIdFormat` <a name="ResetKeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat"></a>

```csharp
private void ResetKeyIdFormat()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

SshSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig">AllowedUserKeyConfig</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput">AlgorithmSignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput">AllowBareDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput">AllowedCriticalOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput">AllowedExtensionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput">AllowedUserKeyConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput">AllowedUserKeyLengthsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput">AllowedUsersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput">AllowedUsersTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput">AllowHostCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput">AllowSubdomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput">AllowUserCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput">AllowUserKeyIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput">CidrListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput">DefaultCriticalOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput">DefaultExtensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput">DefaultUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput">DefaultUserTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput">KeyIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner">AlgorithmSigner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains">AllowBareDomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions">AllowedCriticalOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions">AllowedExtensions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths">AllowedUserKeyLengths</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers">AllowedUsers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate">AllowedUsersTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates">AllowHostCertificates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains">AllowSubdomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates">AllowUserCertificates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds">AllowUserKeyIds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList">CidrList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions">DefaultCriticalOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions">DefaultExtensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser">DefaultUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate">DefaultUserTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat">KeyIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedUserKeyConfig`<sup>Required</sup> <a name="AllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig"></a>

```csharp
public SshSecretBackendRoleAllowedUserKeyConfigList AllowedUserKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a>

---

##### `AlgorithmSignerInput`<sup>Optional</sup> <a name="AlgorithmSignerInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput"></a>

```csharp
public string AlgorithmSignerInput { get; }
```

- *Type:* string

---

##### `AllowBareDomainsInput`<sup>Optional</sup> <a name="AllowBareDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput"></a>

```csharp
public object AllowBareDomainsInput { get; }
```

- *Type:* object

---

##### `AllowedCriticalOptionsInput`<sup>Optional</sup> <a name="AllowedCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput"></a>

```csharp
public string AllowedCriticalOptionsInput { get; }
```

- *Type:* string

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput"></a>

```csharp
public string AllowedDomainsInput { get; }
```

- *Type:* string

---

##### `AllowedExtensionsInput`<sup>Optional</sup> <a name="AllowedExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput"></a>

```csharp
public string AllowedExtensionsInput { get; }
```

- *Type:* string

---

##### `AllowedUserKeyConfigInput`<sup>Optional</sup> <a name="AllowedUserKeyConfigInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput"></a>

```csharp
public object AllowedUserKeyConfigInput { get; }
```

- *Type:* object

---

##### `AllowedUserKeyLengthsInput`<sup>Optional</sup> <a name="AllowedUserKeyLengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> AllowedUserKeyLengthsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `AllowedUsersInput`<sup>Optional</sup> <a name="AllowedUsersInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput"></a>

```csharp
public string AllowedUsersInput { get; }
```

- *Type:* string

---

##### `AllowedUsersTemplateInput`<sup>Optional</sup> <a name="AllowedUsersTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput"></a>

```csharp
public object AllowedUsersTemplateInput { get; }
```

- *Type:* object

---

##### `AllowHostCertificatesInput`<sup>Optional</sup> <a name="AllowHostCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput"></a>

```csharp
public object AllowHostCertificatesInput { get; }
```

- *Type:* object

---

##### `AllowSubdomainsInput`<sup>Optional</sup> <a name="AllowSubdomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput"></a>

```csharp
public object AllowSubdomainsInput { get; }
```

- *Type:* object

---

##### `AllowUserCertificatesInput`<sup>Optional</sup> <a name="AllowUserCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput"></a>

```csharp
public object AllowUserCertificatesInput { get; }
```

- *Type:* object

---

##### `AllowUserKeyIdsInput`<sup>Optional</sup> <a name="AllowUserKeyIdsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput"></a>

```csharp
public object AllowUserKeyIdsInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput"></a>

```csharp
public string CidrListInput { get; }
```

- *Type:* string

---

##### `DefaultCriticalOptionsInput`<sup>Optional</sup> <a name="DefaultCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultCriticalOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultExtensionsInput`<sup>Optional</sup> <a name="DefaultExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultExtensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultUserInput`<sup>Optional</sup> <a name="DefaultUserInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput"></a>

```csharp
public string DefaultUserInput { get; }
```

- *Type:* string

---

##### `DefaultUserTemplateInput`<sup>Optional</sup> <a name="DefaultUserTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput"></a>

```csharp
public object DefaultUserTemplateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdFormatInput`<sup>Optional</sup> <a name="KeyIdFormatInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput"></a>

```csharp
public string KeyIdFormatInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput"></a>

```csharp
public string MaxTtlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `AlgorithmSigner`<sup>Required</sup> <a name="AlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner"></a>

```csharp
public string AlgorithmSigner { get; }
```

- *Type:* string

---

##### `AllowBareDomains`<sup>Required</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains"></a>

```csharp
public object AllowBareDomains { get; }
```

- *Type:* object

---

##### `AllowedCriticalOptions`<sup>Required</sup> <a name="AllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions"></a>

```csharp
public string AllowedCriticalOptions { get; }
```

- *Type:* string

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains"></a>

```csharp
public string AllowedDomains { get; }
```

- *Type:* string

---

##### `AllowedExtensions`<sup>Required</sup> <a name="AllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions"></a>

```csharp
public string AllowedExtensions { get; }
```

- *Type:* string

---

##### `AllowedUserKeyLengths`<sup>Required</sup> <a name="AllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> AllowedUserKeyLengths { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `AllowedUsers`<sup>Required</sup> <a name="AllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers"></a>

```csharp
public string AllowedUsers { get; }
```

- *Type:* string

---

##### `AllowedUsersTemplate`<sup>Required</sup> <a name="AllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate"></a>

```csharp
public object AllowedUsersTemplate { get; }
```

- *Type:* object

---

##### `AllowHostCertificates`<sup>Required</sup> <a name="AllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates"></a>

```csharp
public object AllowHostCertificates { get; }
```

- *Type:* object

---

##### `AllowSubdomains`<sup>Required</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains"></a>

```csharp
public object AllowSubdomains { get; }
```

- *Type:* object

---

##### `AllowUserCertificates`<sup>Required</sup> <a name="AllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates"></a>

```csharp
public object AllowUserCertificates { get; }
```

- *Type:* object

---

##### `AllowUserKeyIds`<sup>Required</sup> <a name="AllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds"></a>

```csharp
public object AllowUserKeyIds { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList"></a>

```csharp
public string CidrList { get; }
```

- *Type:* string

---

##### `DefaultCriticalOptions`<sup>Required</sup> <a name="DefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultCriticalOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultExtensions`<sup>Required</sup> <a name="DefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultExtensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultUser`<sup>Required</sup> <a name="DefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser"></a>

```csharp
public string DefaultUser { get; }
```

- *Type:* string

---

##### `DefaultUserTemplate`<sup>Required</sup> <a name="DefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate"></a>

```csharp
public object DefaultUserTemplate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyIdFormat`<sup>Required</sup> <a name="KeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat"></a>

```csharp
public string KeyIdFormat { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl"></a>

```csharp
public string MaxTtl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendRoleAllowedUserKeyConfig <a name="SshSecretBackendRoleAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendRoleAllowedUserKeyConfig {
    double[] Lengths,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths">Lengths</a></code> | <code>double[]</code> | List of allowed key lengths, vault-1.10 and above. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type">Type</a></code> | <code>string</code> | Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521. |

---

##### `Lengths`<sup>Required</sup> <a name="Lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths"></a>

```csharp
public double[] Lengths { get; set; }
```

- *Type:* double[]

List of allowed key lengths, vault-1.10 and above.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#type SshSecretBackendRole#type}

---

### SshSecretBackendRoleConfig <a name="SshSecretBackendRoleConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendRoleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string KeyType,
    string Name,
    string AlgorithmSigner = null,
    object AllowBareDomains = null,
    string AllowedCriticalOptions = null,
    string AllowedDomains = null,
    string AllowedExtensions = null,
    object AllowedUserKeyConfig = null,
    System.Collections.Generic.IDictionary<string, double> AllowedUserKeyLengths = null,
    string AllowedUsers = null,
    object AllowedUsersTemplate = null,
    object AllowHostCertificates = null,
    object AllowSubdomains = null,
    object AllowUserCertificates = null,
    object AllowUserKeyIds = null,
    string CidrList = null,
    System.Collections.Generic.IDictionary<string, string> DefaultCriticalOptions = null,
    System.Collections.Generic.IDictionary<string, string> DefaultExtensions = null,
    string DefaultUser = null,
    object DefaultUserTemplate = null,
    string Id = null,
    string KeyIdFormat = null,
    string MaxTtl = null,
    string Namespace = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner">AlgorithmSigner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains">AllowBareDomains</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions">AllowedCriticalOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions">AllowedExtensions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig">AllowedUserKeyConfig</a></code> | <code>object</code> | allowed_user_key_config block. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths">AllowedUserKeyLengths</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers">AllowedUsers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate">AllowedUsersTemplate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates">AllowHostCertificates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains">AllowSubdomains</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates">AllowUserCertificates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds">AllowUserKeyIds</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList">CidrList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions">DefaultCriticalOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions">DefaultExtensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser">DefaultUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate">DefaultUserTemplate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat">KeyIdFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `AlgorithmSigner`<sup>Optional</sup> <a name="AlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner"></a>

```csharp
public string AlgorithmSigner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `AllowBareDomains`<sup>Optional</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains"></a>

```csharp
public object AllowBareDomains { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `AllowedCriticalOptions`<sup>Optional</sup> <a name="AllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions"></a>

```csharp
public string AllowedCriticalOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains"></a>

```csharp
public string AllowedDomains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `AllowedExtensions`<sup>Optional</sup> <a name="AllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions"></a>

```csharp
public string AllowedExtensions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `AllowedUserKeyConfig`<sup>Optional</sup> <a name="AllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig"></a>

```csharp
public object AllowedUserKeyConfig { get; set; }
```

- *Type:* object

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `AllowedUserKeyLengths`<sup>Optional</sup> <a name="AllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> AllowedUserKeyLengths { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}.

---

##### `AllowedUsers`<sup>Optional</sup> <a name="AllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers"></a>

```csharp
public string AllowedUsers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `AllowedUsersTemplate`<sup>Optional</sup> <a name="AllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate"></a>

```csharp
public object AllowedUsersTemplate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `AllowHostCertificates`<sup>Optional</sup> <a name="AllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates"></a>

```csharp
public object AllowHostCertificates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `AllowSubdomains`<sup>Optional</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains"></a>

```csharp
public object AllowSubdomains { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `AllowUserCertificates`<sup>Optional</sup> <a name="AllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates"></a>

```csharp
public object AllowUserCertificates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `AllowUserKeyIds`<sup>Optional</sup> <a name="AllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds"></a>

```csharp
public object AllowUserKeyIds { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList"></a>

```csharp
public string CidrList { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `DefaultCriticalOptions`<sup>Optional</sup> <a name="DefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultCriticalOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `DefaultExtensions`<sup>Optional</sup> <a name="DefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultExtensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}.

---

##### `DefaultUser`<sup>Optional</sup> <a name="DefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser"></a>

```csharp
public string DefaultUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `DefaultUserTemplate`<sup>Optional</sup> <a name="DefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate"></a>

```csharp
public object DefaultUserTemplate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyIdFormat`<sup>Optional</sup> <a name="KeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat"></a>

```csharp
public string KeyIdFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public string MaxTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### SshSecretBackendRoleAllowedUserKeyConfigList <a name="SshSecretBackendRoleAllowedUserKeyConfigList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendRoleAllowedUserKeyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get"></a>

```csharp
private SshSecretBackendRoleAllowedUserKeyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SshSecretBackendRoleAllowedUserKeyConfigOutputReference <a name="SshSecretBackendRoleAllowedUserKeyConfigOutputReference" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new SshSecretBackendRoleAllowedUserKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput">LengthsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths">Lengths</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LengthsInput`<sup>Optional</sup> <a name="LengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput"></a>

```csharp
public double[] LengthsInput { get; }
```

- *Type:* double[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Lengths`<sup>Required</sup> <a name="Lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths"></a>

```csharp
public double[] Lengths { get; }
```

- *Type:* double[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



