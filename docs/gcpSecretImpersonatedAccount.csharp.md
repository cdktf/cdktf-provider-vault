# `vault_gcp_secret_impersonated_account`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_impersonated_account`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account).

# `gcpSecretImpersonatedAccount` Submodule <a name="`gcpSecretImpersonatedAccount` Submodule" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretImpersonatedAccount <a name="GcpSecretImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretImpersonatedAccount(Construct Scope, string Id, GcpSecretImpersonatedAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes"></a>

```csharp
private void ResetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretImpersonatedAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretImpersonatedAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretImpersonatedAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject">ServiceAccountProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput">ImpersonatedAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput">TokenScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ServiceAccountProject`<sup>Required</sup> <a name="ServiceAccountProject" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject"></a>

```csharp
public string ServiceAccountProject { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImpersonatedAccountInput`<sup>Optional</sup> <a name="ImpersonatedAccountInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput"></a>

```csharp
public string ImpersonatedAccountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput"></a>

```csharp
public string[] TokenScopesInput { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretImpersonatedAccountConfig <a name="GcpSecretImpersonatedAccountConfig" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretImpersonatedAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string ImpersonatedAccount,
    string ServiceAccountEmail,
    string Id = null,
    string Namespace = null,
    string[] TokenScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend">Backend</a></code> | <code>string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; set; }
```

- *Type:* string

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; set; }
```

- *Type:* string[]

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---



