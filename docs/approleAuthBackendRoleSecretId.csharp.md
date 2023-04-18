# `vault_approle_auth_backend_role_secret_id`

Refer to the Terraform Registory for docs: [`vault_approle_auth_backend_role_secret_id`](https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id).

# `approleAuthBackendRoleSecretId` Submodule <a name="`approleAuthBackendRoleSecretId` Submodule" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRoleSecretId <a name="ApproleAuthBackendRoleSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ApproleAuthBackendRoleSecretId(Construct Scope, string Id, ApproleAuthBackendRoleSecretIdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig">ApproleAuthBackendRoleSecretIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig">ApproleAuthBackendRoleSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor">ResetWithWrappedAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList"></a>

```csharp
private void ResetCidrList()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetWithWrappedAccessor` <a name="ResetWithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor"></a>

```csharp
private void ResetWithWrappedAccessor()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl"></a>

```csharp
private void ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendRoleSecretId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendRoleSecretId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

ApproleAuthBackendRoleSecretId.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor">WrappingAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken">WrappingToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput">CidrListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput">WithWrappedAccessorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList">CidrList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor">WithWrappedAccessor</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor"></a>

```csharp
public string WrappingAccessor { get; }
```

- *Type:* string

---

##### `WrappingToken`<sup>Required</sup> <a name="WrappingToken" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken"></a>

```csharp
public string WrappingToken { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```csharp
public string[] CidrListInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `WithWrappedAccessorInput`<sup>Optional</sup> <a name="WithWrappedAccessorInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput"></a>

```csharp
public object WithWrappedAccessorInput { get; }
```

- *Type:* object

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput"></a>

```csharp
public string WrappingTtlInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList"></a>

```csharp
public string[] CidrList { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `WithWrappedAccessor`<sup>Required</sup> <a name="WithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor"></a>

```csharp
public object WithWrappedAccessor { get; }
```

- *Type:* object

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleSecretIdConfig <a name="ApproleAuthBackendRoleSecretIdConfig" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new ApproleAuthBackendRoleSecretIdConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleName,
    string Backend = null,
    string[] CidrList = null,
    string Id = null,
    string Metadata = null,
    string Namespace = null,
    string SecretId = null,
    object WithWrappedAccessor = null,
    string WrappingTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList">CidrList</a></code> | <code>string[]</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata">Metadata</a></code> | <code>string</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId">SecretId</a></code> | <code>string</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor">WithWrappedAccessor</a></code> | <code>object</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | The TTL duration of the wrapped SecretID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```csharp
public string[] CidrList { get; set; }
```

- *Type:* string[]

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `WithWrappedAccessor`<sup>Optional</sup> <a name="WithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor"></a>

```csharp
public object WithWrappedAccessor { get; set; }
```

- *Type:* object

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; set; }
```

- *Type:* string

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---



