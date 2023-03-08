# `pkiSecretBackendCrlConfig` Submodule <a name="`pkiSecretBackendCrlConfig` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCrlConfig <a name="PkiSecretBackendCrlConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendCrlConfig(Construct Scope, string Id, PkiSecretBackendCrlConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild">ResetAutoRebuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod">ResetAutoRebuildGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval">ResetDeltaRebuildInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta">ResetEnableDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry">ResetExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable">ResetOcspDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry">ResetOcspExpiry</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAutoRebuild` <a name="ResetAutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild"></a>

```csharp
private void ResetAutoRebuild()
```

##### `ResetAutoRebuildGracePeriod` <a name="ResetAutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod"></a>

```csharp
private void ResetAutoRebuildGracePeriod()
```

##### `ResetDeltaRebuildInterval` <a name="ResetDeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval"></a>

```csharp
private void ResetDeltaRebuildInterval()
```

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable"></a>

```csharp
private void ResetDisable()
```

##### `ResetEnableDelta` <a name="ResetEnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta"></a>

```csharp
private void ResetEnableDelta()
```

##### `ResetExpiry` <a name="ResetExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry"></a>

```csharp
private void ResetExpiry()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOcspDisable` <a name="ResetOcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable"></a>

```csharp
private void ResetOcspDisable()
```

##### `ResetOcspExpiry` <a name="ResetOcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry"></a>

```csharp
private void ResetOcspExpiry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCrlConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCrlConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

PkiSecretBackendCrlConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput">AutoRebuildGracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput">AutoRebuildInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput">DeltaRebuildIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput">DisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput">EnableDeltaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput">ExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput">OcspDisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput">OcspExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild">AutoRebuild</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod">AutoRebuildGracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval">DeltaRebuildInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable">Disable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta">EnableDelta</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable">OcspDisable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry">OcspExpiry</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoRebuildGracePeriodInput`<sup>Optional</sup> <a name="AutoRebuildGracePeriodInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput"></a>

```csharp
public string AutoRebuildGracePeriodInput { get; }
```

- *Type:* string

---

##### `AutoRebuildInput`<sup>Optional</sup> <a name="AutoRebuildInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput"></a>

```csharp
public object AutoRebuildInput { get; }
```

- *Type:* object

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DeltaRebuildIntervalInput`<sup>Optional</sup> <a name="DeltaRebuildIntervalInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput"></a>

```csharp
public string DeltaRebuildIntervalInput { get; }
```

- *Type:* string

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput"></a>

```csharp
public object DisableInput { get; }
```

- *Type:* object

---

##### `EnableDeltaInput`<sup>Optional</sup> <a name="EnableDeltaInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput"></a>

```csharp
public object EnableDeltaInput { get; }
```

- *Type:* object

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput"></a>

```csharp
public string ExpiryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OcspDisableInput`<sup>Optional</sup> <a name="OcspDisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput"></a>

```csharp
public object OcspDisableInput { get; }
```

- *Type:* object

---

##### `OcspExpiryInput`<sup>Optional</sup> <a name="OcspExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput"></a>

```csharp
public string OcspExpiryInput { get; }
```

- *Type:* string

---

##### `AutoRebuild`<sup>Required</sup> <a name="AutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild"></a>

```csharp
public object AutoRebuild { get; }
```

- *Type:* object

---

##### `AutoRebuildGracePeriod`<sup>Required</sup> <a name="AutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod"></a>

```csharp
public string AutoRebuildGracePeriod { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DeltaRebuildInterval`<sup>Required</sup> <a name="DeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval"></a>

```csharp
public string DeltaRebuildInterval { get; }
```

- *Type:* string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable"></a>

```csharp
public object Disable { get; }
```

- *Type:* object

---

##### `EnableDelta`<sup>Required</sup> <a name="EnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta"></a>

```csharp
public object EnableDelta { get; }
```

- *Type:* object

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OcspDisable`<sup>Required</sup> <a name="OcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable"></a>

```csharp
public object OcspDisable { get; }
```

- *Type:* object

---

##### `OcspExpiry`<sup>Required</sup> <a name="OcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry"></a>

```csharp
public string OcspExpiry { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCrlConfigConfig <a name="PkiSecretBackendCrlConfigConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new PkiSecretBackendCrlConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    object AutoRebuild = null,
    string AutoRebuildGracePeriod = null,
    string DeltaRebuildInterval = null,
    object Disable = null,
    object EnableDelta = null,
    string Expiry = null,
    string Id = null,
    string Namespace = null,
    object OcspDisable = null,
    string OcspExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild">AutoRebuild</a></code> | <code>object</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod">AutoRebuildGracePeriod</a></code> | <code>string</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval">DeltaRebuildInterval</a></code> | <code>string</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable">Disable</a></code> | <code>object</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta">EnableDelta</a></code> | <code>object</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry">Expiry</a></code> | <code>string</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable">OcspDisable</a></code> | <code>object</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry">OcspExpiry</a></code> | <code>string</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `AutoRebuild`<sup>Optional</sup> <a name="AutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild"></a>

```csharp
public object AutoRebuild { get; set; }
```

- *Type:* object

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `AutoRebuildGracePeriod`<sup>Optional</sup> <a name="AutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod"></a>

```csharp
public string AutoRebuildGracePeriod { get; set; }
```

- *Type:* string

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `DeltaRebuildInterval`<sup>Optional</sup> <a name="DeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval"></a>

```csharp
public string DeltaRebuildInterval { get; set; }
```

- *Type:* string

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable"></a>

```csharp
public object Disable { get; set; }
```

- *Type:* object

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `EnableDelta`<sup>Optional</sup> <a name="EnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta"></a>

```csharp
public object EnableDelta { get; set; }
```

- *Type:* object

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `Expiry`<sup>Optional</sup> <a name="Expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry"></a>

```csharp
public string Expiry { get; set; }
```

- *Type:* string

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `OcspDisable`<sup>Optional</sup> <a name="OcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable"></a>

```csharp
public object OcspDisable { get; set; }
```

- *Type:* object

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `OcspExpiry`<sup>Optional</sup> <a name="OcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry"></a>

```csharp
public string OcspExpiry { get; set; }
```

- *Type:* string

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---


