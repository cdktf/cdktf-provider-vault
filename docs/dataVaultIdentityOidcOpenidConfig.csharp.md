# `dataVaultIdentityOidcOpenidConfig` Submodule <a name="`dataVaultIdentityOidcOpenidConfig` Submodule" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcOpenidConfig <a name="DataVaultIdentityOidcOpenidConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityOidcOpenidConfig(Construct Scope, string Id, DataVaultIdentityOidcOpenidConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig">DataVaultIdentityOidcOpenidConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig">DataVaultIdentityOidcOpenidConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityOidcOpenidConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityOidcOpenidConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityOidcOpenidConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DataVaultIdentityOidcOpenidConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultIdentityOidcOpenidConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultIdentityOidcOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported">GrantTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported">IdTokenSigningAlgValuesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported">RequestUriParameterSupported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported">ResponseTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported">ScopesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported">SubjectTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported">TokenEndpointAuthMethodsSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint">UserinfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `GrantTypesSupported`<sup>Required</sup> <a name="GrantTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported"></a>

```csharp
public string[] GrantTypesSupported { get; }
```

- *Type:* string[]

---

##### `IdTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="IdTokenSigningAlgValuesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```csharp
public string[] IdTokenSigningAlgValuesSupported { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `RequestUriParameterSupported`<sup>Required</sup> <a name="RequestUriParameterSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported"></a>

```csharp
public IResolvable RequestUriParameterSupported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ResponseTypesSupported`<sup>Required</sup> <a name="ResponseTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported"></a>

```csharp
public string[] ResponseTypesSupported { get; }
```

- *Type:* string[]

---

##### `ScopesSupported`<sup>Required</sup> <a name="ScopesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported"></a>

```csharp
public string[] ScopesSupported { get; }
```

- *Type:* string[]

---

##### `SubjectTypesSupported`<sup>Required</sup> <a name="SubjectTypesSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported"></a>

```csharp
public string[] SubjectTypesSupported { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `TokenEndpointAuthMethodsSupported`<sup>Required</sup> <a name="TokenEndpointAuthMethodsSupported" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported"></a>

```csharp
public string[] TokenEndpointAuthMethodsSupported { get; }
```

- *Type:* string[]

---

##### `UserinfoEndpoint`<sup>Required</sup> <a name="UserinfoEndpoint" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint"></a>

```csharp
public string UserinfoEndpoint { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcOpenidConfigConfig <a name="DataVaultIdentityOidcOpenidConfigConfig" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DataVaultIdentityOidcOpenidConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name">Name</a></code> | <code>string</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---



