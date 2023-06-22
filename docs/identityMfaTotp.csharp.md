# `vault_identity_mfa_totp`

Refer to the Terraform Registory for docs: [`vault_identity_mfa_totp`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp).

# `identityMfaTotp` Submodule <a name="`identityMfaTotp` Submodule" id="@cdktf/provider-vault.identityMfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaTotp <a name="IdentityMfaTotp" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp vault_identity_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaTotp(Construct Scope, string Id, IdentityMfaTotpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits">ResetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts">ResetMaxValidationAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize">ResetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew">ResetSkew</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetDigits` <a name="ResetDigits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits"></a>

```csharp
private void ResetDigits()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetMaxValidationAttempts` <a name="ResetMaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts"></a>

```csharp
private void ResetMaxValidationAttempts()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetQrSize` <a name="ResetQrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize"></a>

```csharp
private void ResetQrSize()
```

##### `ResetSkew` <a name="ResetSkew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew"></a>

```csharp
private void ResetSkew()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaTotp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaTotp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityMfaTotp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId">MethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor">MountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput">DigitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput">MaxValidationAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput">QrSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput">SkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits">Digits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts">MaxValidationAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize">QrSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew">Skew</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId"></a>

```csharp
public string MethodId { get; }
```

- *Type:* string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor"></a>

```csharp
public string MountAccessor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DigitsInput`<sup>Optional</sup> <a name="DigitsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput"></a>

```csharp
public double DigitsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `MaxValidationAttemptsInput`<sup>Optional</sup> <a name="MaxValidationAttemptsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput"></a>

```csharp
public double MaxValidationAttemptsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `QrSizeInput`<sup>Optional</sup> <a name="QrSizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput"></a>

```csharp
public double QrSizeInput { get; }
```

- *Type:* double

---

##### `SkewInput`<sup>Optional</sup> <a name="SkewInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput"></a>

```csharp
public double SkewInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Digits`<sup>Required</sup> <a name="Digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits"></a>

```csharp
public double Digits { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `MaxValidationAttempts`<sup>Required</sup> <a name="MaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts"></a>

```csharp
public double MaxValidationAttempts { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `QrSize`<sup>Required</sup> <a name="QrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize"></a>

```csharp
public double QrSize { get; }
```

- *Type:* double

---

##### `Skew`<sup>Required</sup> <a name="Skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew"></a>

```csharp
public double Skew { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaTotpConfig <a name="IdentityMfaTotpConfig" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityMfaTotpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Issuer,
    string Algorithm = null,
    double Digits = null,
    string Id = null,
    double KeySize = null,
    double MaxValidationAttempts = null,
    string Namespace = null,
    double Period = null,
    double QrSize = null,
    double Skew = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer">Issuer</a></code> | <code>string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits">Digits</a></code> | <code>double</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize">KeySize</a></code> | <code>double</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts">MaxValidationAttempts</a></code> | <code>double</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period">Period</a></code> | <code>double</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize">QrSize</a></code> | <code>double</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew">Skew</a></code> | <code>double</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `Digits`<sup>Optional</sup> <a name="Digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits"></a>

```csharp
public double Digits { get; set; }
```

- *Type:* double

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `MaxValidationAttempts`<sup>Optional</sup> <a name="MaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts"></a>

```csharp
public double MaxValidationAttempts { get; set; }
```

- *Type:* double

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `QrSize`<sup>Optional</sup> <a name="QrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize"></a>

```csharp
public double QrSize { get; set; }
```

- *Type:* double

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `Skew`<sup>Optional</sup> <a name="Skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew"></a>

```csharp
public double Skew { get; set; }
```

- *Type:* double

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---



