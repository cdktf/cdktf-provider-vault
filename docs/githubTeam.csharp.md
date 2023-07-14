# `vault_github_team`

Refer to the Terraform Registory for docs: [`vault_github_team`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team).

# `githubTeam` Submodule <a name="`githubTeam` Submodule" id="@cdktf/provider-vault.githubTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubTeam <a name="GithubTeam" id="@cdktf/provider-vault.githubTeam.GithubTeam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team vault_github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.githubTeam.GithubTeam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GithubTeam(Construct Scope, string Id, GithubTeamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig">GithubTeamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.githubTeam.GithubTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig">GithubTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.githubTeam.GithubTeam.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.githubTeam.GithubTeam.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.githubTeam.GithubTeam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.githubTeam.GithubTeam.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.githubTeam.GithubTeam.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.githubTeam.GithubTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.githubTeam.GithubTeam.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.githubTeam.GithubTeam.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.githubTeam.GithubTeam.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.githubTeam.GithubTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.githubTeam.GithubTeam.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.githubTeam.GithubTeam.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.githubTeam.GithubTeam.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.githubTeam.GithubTeam.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.githubTeam.GithubTeam.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GithubTeam.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.githubTeam.GithubTeam.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GithubTeam.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GithubTeam.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.githubTeam.GithubTeam.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.teamInput">TeamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.team">Team</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.teamInput"></a>

```csharp
public string TeamInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.team"></a>

```csharp
public string Team { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeam.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.githubTeam.GithubTeam.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GithubTeamConfig <a name="GithubTeamConfig" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GithubTeamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Team,
    string Backend = null,
    string Id = null,
    string Namespace = null,
    string[] Policies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.team">Team</a></code> | <code>string</code> | GitHub team name in "slugified" format. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.backend">Backend</a></code> | <code>string</code> | Auth backend to which team mapping will be configured. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#id GithubTeam#id}. |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.policies">Policies</a></code> | <code>string[]</code> | Policies to be assigned to this team. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.team"></a>

```csharp
public string Team { get; set; }
```

- *Type:* string

GitHub team name in "slugified" format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#team GithubTeam#team}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Auth backend to which team mapping will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#backend GithubTeam#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#id GithubTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#namespace GithubTeam#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.githubTeam.GithubTeamConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Policies to be assigned to this team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/github_team#policies GithubTeam#policies}

---



