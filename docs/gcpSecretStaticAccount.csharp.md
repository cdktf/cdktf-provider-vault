# `vault_gcp_secret_static_account`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_static_account`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account).

# `gcpSecretStaticAccount` Submodule <a name="`gcpSecretStaticAccount` Submodule" id="@cdktf/provider-vault.gcpSecretStaticAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretStaticAccount <a name="GcpSecretStaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account vault_gcp_secret_static_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretStaticAccount(Construct Scope, string Id, GcpSecretStaticAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig">GcpSecretStaticAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding">PutBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding">ResetBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBinding` <a name="PutBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding"></a>

```csharp
private void PutBinding(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding.parameter.value"></a>

- *Type:* object

---

##### `ResetBinding` <a name="ResetBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding"></a>

```csharp
private void ResetBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType"></a>

```csharp
private void ResetSecretType()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes"></a>

```csharp
private void ResetTokenScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretStaticAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretStaticAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpSecretStaticAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding">Binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject">ServiceAccountProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput">BindingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput">StaticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput">TokenScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount">StaticAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding"></a>

```csharp
public GcpSecretStaticAccountBindingList Binding { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a>

---

##### `ServiceAccountProject`<sup>Required</sup> <a name="ServiceAccountProject" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject"></a>

```csharp
public string ServiceAccountProject { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BindingInput`<sup>Optional</sup> <a name="BindingInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput"></a>

```csharp
public object BindingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `StaticAccountInput`<sup>Optional</sup> <a name="StaticAccountInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput"></a>

```csharp
public string StaticAccountInput { get; }
```

- *Type:* string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput"></a>

```csharp
public string[] TokenScopesInput { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount"></a>

```csharp
public string StaticAccount { get; }
```

- *Type:* string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretStaticAccountBinding <a name="GcpSecretStaticAccountBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretStaticAccountBinding {
    string Resource,
    string[] Roles
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource">Resource</a></code> | <code>string</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles">Roles</a></code> | <code>string[]</code> | List of roles to apply to the resource. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#resource GcpSecretStaticAccount#resource}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#roles GcpSecretStaticAccount#roles}

---

### GcpSecretStaticAccountConfig <a name="GcpSecretStaticAccountConfig" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretStaticAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string ServiceAccountEmail,
    string StaticAccount,
    object Binding = null,
    string Id = null,
    string Namespace = null,
    string SecretType = null,
    string[] TokenScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend">Backend</a></code> | <code>string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount">StaticAccount</a></code> | <code>string</code> | Name of the Static Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding">Binding</a></code> | <code>object</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType">SecretType</a></code> | <code>string</code> | Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount"></a>

```csharp
public string StaticAccount { get; set; }
```

- *Type:* string

Name of the Static Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}

---

##### `Binding`<sup>Optional</sup> <a name="Binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding"></a>

```csharp
public object Binding { get; set; }
```

- *Type:* object

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; set; }
```

- *Type:* string[]

List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretStaticAccountBindingList <a name="GcpSecretStaticAccountBindingList" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretStaticAccountBindingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get"></a>

```csharp
private GcpSecretStaticAccountBindingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GcpSecretStaticAccountBindingOutputReference <a name="GcpSecretStaticAccountBindingOutputReference" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpSecretStaticAccountBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



