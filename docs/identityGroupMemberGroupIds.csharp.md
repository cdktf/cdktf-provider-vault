# `vault_identity_group_member_group_ids`

Refer to the Terraform Registory for docs: [`vault_identity_group_member_group_ids`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids).

# `identityGroupMemberGroupIds` Submodule <a name="`identityGroupMemberGroupIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberGroupIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberGroupIds <a name="IdentityGroupMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids vault_identity_group_member_group_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityGroupMemberGroupIds(Construct Scope, string Id, IdentityGroupMemberGroupIdsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig">IdentityGroupMemberGroupIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive">ResetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds">ResetMemberGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExclusive` <a name="ResetExclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetExclusive"></a>

```csharp
private void ResetExclusive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemberGroupIds` <a name="ResetMemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetMemberGroupIds"></a>

```csharp
private void ResetMemberGroupIds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityGroupMemberGroupIds.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityGroupMemberGroupIds.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityGroupMemberGroupIds.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput">ExclusiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput">MemberGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive">Exclusive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds">MemberGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExclusiveInput`<sup>Optional</sup> <a name="ExclusiveInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusiveInput"></a>

```csharp
public object ExclusiveInput { get; }
```

- *Type:* object

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberGroupIdsInput`<sup>Optional</sup> <a name="MemberGroupIdsInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIdsInput"></a>

```csharp
public string[] MemberGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Exclusive`<sup>Required</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.exclusive"></a>

```csharp
public object Exclusive { get; }
```

- *Type:* object

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberGroupIds`<sup>Required</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.memberGroupIds"></a>

```csharp
public string[] MemberGroupIds { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIds.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberGroupIdsConfig <a name="IdentityGroupMemberGroupIdsConfig" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityGroupMemberGroupIdsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId,
    object Exclusive = null,
    string Id = null,
    string[] MemberGroupIds = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId">GroupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive">Exclusive</a></code> | <code>object</code> | If set to true, allows the resource to manage member group ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds">MemberGroupIds</a></code> | <code>string[]</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#group_id IdentityGroupMemberGroupIds#group_id}

---

##### `Exclusive`<sup>Optional</sup> <a name="Exclusive" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.exclusive"></a>

```csharp
public object Exclusive { get; set; }
```

- *Type:* object

If set to true, allows the resource to manage member group ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#exclusive IdentityGroupMemberGroupIds#exclusive}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#id IdentityGroupMemberGroupIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberGroupIds`<sup>Optional</sup> <a name="MemberGroupIds" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.memberGroupIds"></a>

```csharp
public string[] MemberGroupIds { get; set; }
```

- *Type:* string[]

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#member_group_ids IdentityGroupMemberGroupIds#member_group_ids}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityGroupMemberGroupIds.IdentityGroupMemberGroupIdsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/identity_group_member_group_ids#namespace IdentityGroupMemberGroupIds#namespace}

---



