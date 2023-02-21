# `identityOidcClient` Submodule <a name="`identityOidcClient` Submodule" id="@cdktf/provider-vault.identityOidcClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcClient <a name="IdentityOidcClient" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client vault_identity_oidc_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityOidcClient(Construct Scope, string Id, IdentityOidcClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl">ResetAccessTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments">ResetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType">ResetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl">ResetIdTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessTokenTtl` <a name="ResetAccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl"></a>

```csharp
private void ResetAccessTokenTtl()
```

##### `ResetAssignments` <a name="ResetAssignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments"></a>

```csharp
private void ResetAssignments()
```

##### `ResetClientType` <a name="ResetClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType"></a>

```csharp
private void ResetClientType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdTokenTtl` <a name="ResetIdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl"></a>

```csharp
private void ResetIdTokenTtl()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

IdentityOidcClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput">AccessTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput">AssignmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput">ClientTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput">IdTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl">AccessTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments">Assignments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType">ClientType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl">IdTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `AccessTokenTtlInput`<sup>Optional</sup> <a name="AccessTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput"></a>

```csharp
public double AccessTokenTtlInput { get; }
```

- *Type:* double

---

##### `AssignmentsInput`<sup>Optional</sup> <a name="AssignmentsInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput"></a>

```csharp
public string[] AssignmentsInput { get; }
```

- *Type:* string[]

---

##### `ClientTypeInput`<sup>Optional</sup> <a name="ClientTypeInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput"></a>

```csharp
public string ClientTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdTokenTtlInput`<sup>Optional</sup> <a name="IdTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput"></a>

```csharp
public double IdTokenTtlInput { get; }
```

- *Type:* double

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `AccessTokenTtl`<sup>Required</sup> <a name="AccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl"></a>

```csharp
public double AccessTokenTtl { get; }
```

- *Type:* double

---

##### `Assignments`<sup>Required</sup> <a name="Assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments"></a>

```csharp
public string[] Assignments { get; }
```

- *Type:* string[]

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType"></a>

```csharp
public string ClientType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdTokenTtl`<sup>Required</sup> <a name="IdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl"></a>

```csharp
public double IdTokenTtl { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcClientConfig <a name="IdentityOidcClientConfig" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new IdentityOidcClientConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double AccessTokenTtl = null,
    string[] Assignments = null,
    string ClientType = null,
    string Id = null,
    double IdTokenTtl = null,
    string Key = null,
    string Namespace = null,
    string[] RedirectUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name">Name</a></code> | <code>string</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl">AccessTokenTtl</a></code> | <code>double</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments">Assignments</a></code> | <code>string[]</code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType">ClientType</a></code> | <code>string</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl">IdTokenTtl</a></code> | <code>double</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key">Key</a></code> | <code>string</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | Redirection URI values used by the client. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#name IdentityOidcClient#name}

---

##### `AccessTokenTtl`<sup>Optional</sup> <a name="AccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl"></a>

```csharp
public double AccessTokenTtl { get; set; }
```

- *Type:* double

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `Assignments`<sup>Optional</sup> <a name="Assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments"></a>

```csharp
public string[] Assignments { get; set; }
```

- *Type:* string[]

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `ClientType`<sup>Optional</sup> <a name="ClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType"></a>

```csharp
public string ClientType { get; set; }
```

- *Type:* string

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdTokenTtl`<sup>Optional</sup> <a name="IdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl"></a>

```csharp
public double IdTokenTtl { get; set; }
```

- *Type:* double

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#key IdentityOidcClient#key}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---



