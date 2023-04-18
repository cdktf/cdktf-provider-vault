# `vault_rabbitmq_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_rabbitmq_secret_backend_role`](https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role).

# `rabbitmqSecretBackendRole` Submodule <a name="`rabbitmqSecretBackendRole` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackendRole <a name="RabbitmqSecretBackendRole" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRole(Construct Scope, string Id, RabbitmqSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig">RabbitmqSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig">RabbitmqSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost">PutVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic">PutVhostTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost">ResetVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic">ResetVhostTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutVhost` <a name="PutVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost"></a>

```csharp
private void PutVhost(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost.parameter.value"></a>

- *Type:* object

---

##### `PutVhostTopic` <a name="PutVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic"></a>

```csharp
private void PutVhostTopic(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVhost` <a name="ResetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost"></a>

```csharp
private void ResetVhost()
```

##### `ResetVhostTopic` <a name="ResetVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic"></a>

```csharp
private void ResetVhostTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

RabbitmqSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

RabbitmqSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

RabbitmqSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost">Vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic">VhostTopic</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput">VhostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput">VhostTopicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Vhost`<sup>Required</sup> <a name="Vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost"></a>

```csharp
public RabbitmqSecretBackendRoleVhostList Vhost { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a>

---

##### `VhostTopic`<sup>Required</sup> <a name="VhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic"></a>

```csharp
public RabbitmqSecretBackendRoleVhostTopicList VhostTopic { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `VhostInput`<sup>Optional</sup> <a name="VhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput"></a>

```csharp
public object VhostInput { get; }
```

- *Type:* object

---

##### `VhostTopicInput`<sup>Optional</sup> <a name="VhostTopicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput"></a>

```csharp
public object VhostTopicInput { get; }
```

- *Type:* object

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendRoleConfig <a name="RabbitmqSecretBackendRoleConfig" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string Name,
    string Id = null,
    string Namespace = null,
    string Tags = null,
    object Vhost = null,
    object VhostTopic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags">Tags</a></code> | <code>string</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost">Vhost</a></code> | <code>object</code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic">VhostTopic</a></code> | <code>object</code> | vhost_topic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `Vhost`<sup>Optional</sup> <a name="Vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost"></a>

```csharp
public object Vhost { get; set; }
```

- *Type:* object

vhost block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `VhostTopic`<sup>Optional</sup> <a name="VhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic"></a>

```csharp
public object VhostTopic { get; set; }
```

- *Type:* object

vhost_topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

### RabbitmqSecretBackendRoleVhost <a name="RabbitmqSecretBackendRoleVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhost {
    string Configure,
    string Host,
    string Read,
    string Write
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure">Configure</a></code> | <code>string</code> | The configure permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host">Host</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read">Read</a></code> | <code>string</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write">Write</a></code> | <code>string</code> | The write permissions for this vhost. |

---

##### `Configure`<sup>Required</sup> <a name="Configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure"></a>

```csharp
public string Configure { get; set; }
```

- *Type:* string

The configure permissions for this vhost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#configure RabbitmqSecretBackendRole#configure}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write"></a>

```csharp
public string Write { get; set; }
```

- *Type:* string

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

### RabbitmqSecretBackendRoleVhostTopic <a name="RabbitmqSecretBackendRoleVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopic {
    string Host,
    object Vhost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host">Host</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost">Vhost</a></code> | <code>object</code> | vhost block. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `Vhost`<sup>Optional</sup> <a name="Vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost"></a>

```csharp
public object Vhost { get; set; }
```

- *Type:* object

vhost block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

### RabbitmqSecretBackendRoleVhostTopicVhost <a name="RabbitmqSecretBackendRoleVhostTopicVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopicVhost {
    string Read,
    string Topic,
    string Write
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read">Read</a></code> | <code>string</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic">Topic</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write">Write</a></code> | <code>string</code> | The write permissions for this vhost. |

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#topic RabbitmqSecretBackendRole#topic}

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write"></a>

```csharp
public string Write { get; set; }
```

- *Type:* string

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

## Classes <a name="Classes" id="Classes"></a>

### RabbitmqSecretBackendRoleVhostList <a name="RabbitmqSecretBackendRoleVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get"></a>

```csharp
private RabbitmqSecretBackendRoleVhostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RabbitmqSecretBackendRoleVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput">ConfigureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput">WriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure">Configure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write">Write</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigureInput`<sup>Optional</sup> <a name="ConfigureInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput"></a>

```csharp
public string ConfigureInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput"></a>

```csharp
public string WriteInput { get; }
```

- *Type:* string

---

##### `Configure`<sup>Required</sup> <a name="Configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure"></a>

```csharp
public string Configure { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write"></a>

```csharp
public string Write { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RabbitmqSecretBackendRoleVhostTopicList <a name="RabbitmqSecretBackendRoleVhostTopicList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get"></a>

```csharp
private RabbitmqSecretBackendRoleVhostTopicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RabbitmqSecretBackendRoleVhostTopicOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost">PutVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost">ResetVhost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVhost` <a name="PutVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost"></a>

```csharp
private void PutVhost(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost.parameter.value"></a>

- *Type:* object

---

##### `ResetVhost` <a name="ResetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost"></a>

```csharp
private void ResetVhost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost">Vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput">VhostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Vhost`<sup>Required</sup> <a name="Vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost"></a>

```csharp
public RabbitmqSecretBackendRoleVhostTopicVhostList Vhost { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `VhostInput`<sup>Optional</sup> <a name="VhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput"></a>

```csharp
public object VhostInput { get; }
```

- *Type:* object

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RabbitmqSecretBackendRoleVhostTopicVhostList <a name="RabbitmqSecretBackendRoleVhostTopicVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopicVhostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get"></a>

```csharp
private RabbitmqSecretBackendRoleVhostTopicVhostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RabbitmqSecretBackendRoleVhostTopicVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new RabbitmqSecretBackendRoleVhostTopicVhostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput">WriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write">Write</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput"></a>

```csharp
public string WriteInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write"></a>

```csharp
public string Write { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



