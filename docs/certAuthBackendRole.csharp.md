# `vault_cert_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_cert_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role).

# `certAuthBackendRole` Submodule <a name="`certAuthBackendRole` Submodule" id="@cdktf/provider-vault.certAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertAuthBackendRole <a name="CertAuthBackendRole" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role vault_cert_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new CertAuthBackendRole(Construct Scope, string Id, CertAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig">CertAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig">CertAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames">ResetAllowedCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans">ResetAllowedDnsSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans">ResetAllowedEmailSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames">ResetAllowedNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits">ResetAllowedOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationUnits">ResetAllowedOrganizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans">ResetAllowedUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions">ResetRequiredExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowedCommonNames` <a name="ResetAllowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames"></a>

```csharp
private void ResetAllowedCommonNames()
```

##### `ResetAllowedDnsSans` <a name="ResetAllowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans"></a>

```csharp
private void ResetAllowedDnsSans()
```

##### `ResetAllowedEmailSans` <a name="ResetAllowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans"></a>

```csharp
private void ResetAllowedEmailSans()
```

##### `ResetAllowedNames` <a name="ResetAllowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames"></a>

```csharp
private void ResetAllowedNames()
```

##### `ResetAllowedOrganizationalUnits` <a name="ResetAllowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits"></a>

```csharp
private void ResetAllowedOrganizationalUnits()
```

##### `ResetAllowedOrganizationUnits` <a name="ResetAllowedOrganizationUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationUnits"></a>

```csharp
private void ResetAllowedOrganizationUnits()
```

##### `ResetAllowedUriSans` <a name="ResetAllowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans"></a>

```csharp
private void ResetAllowedUriSans()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRequiredExtensions` <a name="ResetRequiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions"></a>

```csharp
private void ResetRequiredExtensions()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

CertAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

CertAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

CertAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput">AllowedCommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput">AllowedDnsSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput">AllowedEmailSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput">AllowedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput">AllowedOrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnitsInput">AllowedOrganizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput">AllowedUriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput">RequiredExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames">AllowedCommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans">AllowedDnsSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans">AllowedEmailSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames">AllowedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits">AllowedOrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnits">AllowedOrganizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans">AllowedUriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions">RequiredExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedCommonNamesInput`<sup>Optional</sup> <a name="AllowedCommonNamesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput"></a>

```csharp
public string[] AllowedCommonNamesInput { get; }
```

- *Type:* string[]

---

##### `AllowedDnsSansInput`<sup>Optional</sup> <a name="AllowedDnsSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput"></a>

```csharp
public string[] AllowedDnsSansInput { get; }
```

- *Type:* string[]

---

##### `AllowedEmailSansInput`<sup>Optional</sup> <a name="AllowedEmailSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput"></a>

```csharp
public string[] AllowedEmailSansInput { get; }
```

- *Type:* string[]

---

##### `AllowedNamesInput`<sup>Optional</sup> <a name="AllowedNamesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput"></a>

```csharp
public string[] AllowedNamesInput { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizationalUnitsInput`<sup>Optional</sup> <a name="AllowedOrganizationalUnitsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput"></a>

```csharp
public string[] AllowedOrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizationUnitsInput`<sup>Optional</sup> <a name="AllowedOrganizationUnitsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnitsInput"></a>

```csharp
public string[] AllowedOrganizationUnitsInput { get; }
```

- *Type:* string[]

---

##### `AllowedUriSansInput`<sup>Optional</sup> <a name="AllowedUriSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput"></a>

```csharp
public string[] AllowedUriSansInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RequiredExtensionsInput`<sup>Optional</sup> <a name="RequiredExtensionsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput"></a>

```csharp
public string[] RequiredExtensionsInput { get; }
```

- *Type:* string[]

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public object TokenNoDefaultPolicyInput { get; }
```

- *Type:* object

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AllowedCommonNames`<sup>Required</sup> <a name="AllowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames"></a>

```csharp
public string[] AllowedCommonNames { get; }
```

- *Type:* string[]

---

##### `AllowedDnsSans`<sup>Required</sup> <a name="AllowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans"></a>

```csharp
public string[] AllowedDnsSans { get; }
```

- *Type:* string[]

---

##### `AllowedEmailSans`<sup>Required</sup> <a name="AllowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans"></a>

```csharp
public string[] AllowedEmailSans { get; }
```

- *Type:* string[]

---

##### `AllowedNames`<sup>Required</sup> <a name="AllowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames"></a>

```csharp
public string[] AllowedNames { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizationalUnits`<sup>Required</sup> <a name="AllowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits"></a>

```csharp
public string[] AllowedOrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizationUnits`<sup>Required</sup> <a name="AllowedOrganizationUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationUnits"></a>

```csharp
public string[] AllowedOrganizationUnits { get; }
```

- *Type:* string[]

---

##### `AllowedUriSans`<sup>Required</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans"></a>

```csharp
public string[] AllowedUriSans { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RequiredExtensions`<sup>Required</sup> <a name="RequiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions"></a>

```csharp
public string[] RequiredExtensions { get; }
```

- *Type:* string[]

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public object TokenNoDefaultPolicy { get; }
```

- *Type:* object

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertAuthBackendRoleConfig <a name="CertAuthBackendRoleConfig" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new CertAuthBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate,
    string Name,
    string[] AllowedCommonNames = null,
    string[] AllowedDnsSans = null,
    string[] AllowedEmailSans = null,
    string[] AllowedNames = null,
    string[] AllowedOrganizationalUnits = null,
    string[] AllowedOrganizationUnits = null,
    string[] AllowedUriSans = null,
    string Backend = null,
    string DisplayName = null,
    string Id = null,
    string Namespace = null,
    string[] RequiredExtensions = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    object TokenNoDefaultPolicy = null,
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
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames">AllowedCommonNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans">AllowedDnsSans</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans">AllowedEmailSans</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames">AllowedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits">AllowedOrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationUnits">AllowedOrganizationUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans">AllowedUriSans</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions">RequiredExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>object</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}.

---

##### `AllowedCommonNames`<sup>Optional</sup> <a name="AllowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames"></a>

```csharp
public string[] AllowedCommonNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}.

---

##### `AllowedDnsSans`<sup>Optional</sup> <a name="AllowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans"></a>

```csharp
public string[] AllowedDnsSans { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}.

---

##### `AllowedEmailSans`<sup>Optional</sup> <a name="AllowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans"></a>

```csharp
public string[] AllowedEmailSans { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}.

---

##### `AllowedNames`<sup>Optional</sup> <a name="AllowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames"></a>

```csharp
public string[] AllowedNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}.

---

##### `AllowedOrganizationalUnits`<sup>Optional</sup> <a name="AllowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits"></a>

```csharp
public string[] AllowedOrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}.

---

##### `AllowedOrganizationUnits`<sup>Optional</sup> <a name="AllowedOrganizationUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationUnits"></a>

```csharp
public string[] AllowedOrganizationUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_organization_units CertAuthBackendRole#allowed_organization_units}.

---

##### `AllowedUriSans`<sup>Optional</sup> <a name="AllowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans"></a>

```csharp
public string[] AllowedUriSans { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}.

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}

---

##### `RequiredExtensions`<sup>Optional</sup> <a name="RequiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions"></a>

```csharp
public string[] RequiredExtensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}.

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public object TokenNoDefaultPolicy { get; set; }
```

- *Type:* object

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}

---



