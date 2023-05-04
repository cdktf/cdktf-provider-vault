# `vault_token`

Refer to the Terraform Registory for docs: [`vault_token`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token).

# `token` Submodule <a name="`token` Submodule" id="@cdktf/provider-vault.token"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Token <a name="Token" id="@cdktf/provider-vault.token.Token"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.token.Token.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new Token(Construct Scope, string Id, TokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.token.TokenConfig">TokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.token.Token.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.token.Token.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.token.TokenConfig">TokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.token.Token.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.token.Token.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetExplicitMaxTtl">ResetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoParent">ResetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewIncrement">ResetRenewIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewMinLease">ResetRenewMinLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.token.Token.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.token.Token.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.token.Token.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.token.Token.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.token.Token.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.token.Token.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.token.Token.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-vault.token.Token.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExplicitMaxTtl` <a name="ResetExplicitMaxTtl" id="@cdktf/provider-vault.token.Token.resetExplicitMaxTtl"></a>

```csharp
private void ResetExplicitMaxTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.token.Token.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-vault.token.Token.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.token.Token.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktf/provider-vault.token.Token.resetNoDefaultPolicy"></a>

```csharp
private void ResetNoDefaultPolicy()
```

##### `ResetNoParent` <a name="ResetNoParent" id="@cdktf/provider-vault.token.Token.resetNoParent"></a>

```csharp
private void ResetNoParent()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktf/provider-vault.token.Token.resetNumUses"></a>

```csharp
private void ResetNumUses()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-vault.token.Token.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.token.Token.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktf/provider-vault.token.Token.resetRenewable"></a>

```csharp
private void ResetRenewable()
```

##### `ResetRenewIncrement` <a name="ResetRenewIncrement" id="@cdktf/provider-vault.token.Token.resetRenewIncrement"></a>

```csharp
private void ResetRenewIncrement()
```

##### `ResetRenewMinLease` <a name="ResetRenewMinLease" id="@cdktf/provider-vault.token.Token.resetRenewMinLease"></a>

```csharp
private void ResetRenewMinLease()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-vault.token.Token.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.token.Token.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktf/provider-vault.token.Token.resetWrappingTtl"></a>

```csharp
private void ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.token.Token.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

Token.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.token.Token.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.token.Token.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

Token.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.token.Token.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.token.Token.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

Token.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.token.Token.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.token.Token.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseStarted">LeaseStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappedToken">WrappedToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingAccessor">WrappingAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput">ExplicitMaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParentInput">NoParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUsesInput">NumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewableInput">RenewableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrementInput">RenewIncrementInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLeaseInput">RenewMinLeaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParent">NoParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUses">NumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewable">Renewable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrement">RenewIncrement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLease">RenewMinLease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.token.Token.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.token.Token.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.token.Token.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.token.Token.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.token.Token.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.token.Token.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.token.Token.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.token.Token.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.token.Token.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.token.Token.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.token.Token.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.token.Token.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.token.Token.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktf/provider-vault.token.Token.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktf/provider-vault.token.Token.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseStarted`<sup>Required</sup> <a name="LeaseStarted" id="@cdktf/provider-vault.token.Token.property.leaseStarted"></a>

```csharp
public string LeaseStarted { get; }
```

- *Type:* string

---

##### `WrappedToken`<sup>Required</sup> <a name="WrappedToken" id="@cdktf/provider-vault.token.Token.property.wrappedToken"></a>

```csharp
public string WrappedToken { get; }
```

- *Type:* string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktf/provider-vault.token.Token.property.wrappingAccessor"></a>

```csharp
public string WrappingAccessor { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-vault.token.Token.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtlInput`<sup>Optional</sup> <a name="ExplicitMaxTtlInput" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput"></a>

```csharp
public string ExplicitMaxTtlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.token.Token.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-vault.token.Token.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.token.Token.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput"></a>

```csharp
public object NoDefaultPolicyInput { get; }
```

- *Type:* object

---

##### `NoParentInput`<sup>Optional</sup> <a name="NoParentInput" id="@cdktf/provider-vault.token.Token.property.noParentInput"></a>

```csharp
public object NoParentInput { get; }
```

- *Type:* object

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktf/provider-vault.token.Token.property.numUsesInput"></a>

```csharp
public double NumUsesInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-vault.token.Token.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.token.Token.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktf/provider-vault.token.Token.property.renewableInput"></a>

```csharp
public object RenewableInput { get; }
```

- *Type:* object

---

##### `RenewIncrementInput`<sup>Optional</sup> <a name="RenewIncrementInput" id="@cdktf/provider-vault.token.Token.property.renewIncrementInput"></a>

```csharp
public double RenewIncrementInput { get; }
```

- *Type:* double

---

##### `RenewMinLeaseInput`<sup>Optional</sup> <a name="RenewMinLeaseInput" id="@cdktf/provider-vault.token.Token.property.renewMinLeaseInput"></a>

```csharp
public double RenewMinLeaseInput { get; }
```

- *Type:* double

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.token.Token.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.token.Token.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktf/provider-vault.token.Token.property.wrappingTtlInput"></a>

```csharp
public string WrappingTtlInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-vault.token.Token.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtl`<sup>Required</sup> <a name="ExplicitMaxTtl" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.token.Token.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-vault.token.Token.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.token.Token.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicy"></a>

```csharp
public object NoDefaultPolicy { get; }
```

- *Type:* object

---

##### `NoParent`<sup>Required</sup> <a name="NoParent" id="@cdktf/provider-vault.token.Token.property.noParent"></a>

```csharp
public object NoParent { get; }
```

- *Type:* object

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktf/provider-vault.token.Token.property.numUses"></a>

```csharp
public double NumUses { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-vault.token.Token.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.token.Token.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktf/provider-vault.token.Token.property.renewable"></a>

```csharp
public object Renewable { get; }
```

- *Type:* object

---

##### `RenewIncrement`<sup>Required</sup> <a name="RenewIncrement" id="@cdktf/provider-vault.token.Token.property.renewIncrement"></a>

```csharp
public double RenewIncrement { get; }
```

- *Type:* double

---

##### `RenewMinLease`<sup>Required</sup> <a name="RenewMinLease" id="@cdktf/provider-vault.token.Token.property.renewMinLease"></a>

```csharp
public double RenewMinLease { get; }
```

- *Type:* double

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.token.Token.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.token.Token.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.token.Token.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.token.Token.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenConfig <a name="TokenConfig" id="@cdktf/provider-vault.token.TokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.token.TokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new TokenConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName = null,
    string ExplicitMaxTtl = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Namespace = null,
    object NoDefaultPolicy = null,
    object NoParent = null,
    double NumUses = null,
    string Period = null,
    string[] Policies = null,
    object Renewable = null,
    double RenewIncrement = null,
    double RenewMinLease = null,
    string RoleName = null,
    string Ttl = null,
    string WrappingTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>object</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noParent">NoParent</a></code> | <code>object</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.numUses">NumUses</a></code> | <code>double</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.period">Period</a></code> | <code>string</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.policies">Policies</a></code> | <code>string[]</code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewable">Renewable</a></code> | <code>object</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewIncrement">RenewIncrement</a></code> | <code>double</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewMinLease">RenewMinLease</a></code> | <code>double</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.roleName">RoleName</a></code> | <code>string</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | The TTL period of the wrapped token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.token.TokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.token.TokenConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.token.TokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.token.TokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.token.TokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.token.TokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.token.TokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-vault.token.TokenConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#display_name Token#display_name}

---

##### `ExplicitMaxTtl`<sup>Optional</sup> <a name="ExplicitMaxTtl" id="@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; set; }
```

- *Type:* string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.token.TokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-vault.token.TokenConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#metadata Token#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.token.TokenConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#namespace Token#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy"></a>

```csharp
public object NoDefaultPolicy { get; set; }
```

- *Type:* object

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `NoParent`<sup>Optional</sup> <a name="NoParent" id="@cdktf/provider-vault.token.TokenConfig.property.noParent"></a>

```csharp
public object NoParent { get; set; }
```

- *Type:* object

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#no_parent Token#no_parent}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktf/provider-vault.token.TokenConfig.property.numUses"></a>

```csharp
public double NumUses { get; set; }
```

- *Type:* double

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#num_uses Token#num_uses}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-vault.token.TokenConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#period Token#period}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.token.TokenConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#policies Token#policies}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktf/provider-vault.token.TokenConfig.property.renewable"></a>

```csharp
public object Renewable { get; set; }
```

- *Type:* object

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#renewable Token#renewable}

---

##### `RenewIncrement`<sup>Optional</sup> <a name="RenewIncrement" id="@cdktf/provider-vault.token.TokenConfig.property.renewIncrement"></a>

```csharp
public double RenewIncrement { get; set; }
```

- *Type:* double

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#renew_increment Token#renew_increment}

---

##### `RenewMinLease`<sup>Optional</sup> <a name="RenewMinLease" id="@cdktf/provider-vault.token.TokenConfig.property.renewMinLease"></a>

```csharp
public double RenewMinLease { get; set; }
```

- *Type:* double

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-vault.token.TokenConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#role_name Token#role_name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.token.TokenConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#ttl Token#ttl}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; set; }
```

- *Type:* string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---



