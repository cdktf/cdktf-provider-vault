# `vault_kv_secret_backend_v2`

Refer to the Terraform Registory for docs: [`vault_kv_secret_backend_v2`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2).

# `kvSecretBackendV2` Submodule <a name="`kvSecretBackendV2` Submodule" id="@cdktf/provider-vault.kvSecretBackendV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretBackendV2 <a name="KvSecretBackendV2" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2 vault_kv_secret_backend_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KvSecretBackendV2(Construct Scope, string Id, KvSecretBackendV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config">KvSecretBackendV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config">KvSecretBackendV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired">ResetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter">ResetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions">ResetMaxVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCasRequired` <a name="ResetCasRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired"></a>

```csharp
private void ResetCasRequired()
```

##### `ResetDeleteVersionAfter` <a name="ResetDeleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter"></a>

```csharp
private void ResetDeleteVersionAfter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxVersions` <a name="ResetMaxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions"></a>

```csharp
private void ResetMaxVersions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KvSecretBackendV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KvSecretBackendV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KvSecretBackendV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput">CasRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput">DeleteVersionAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput">MaxVersionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired">CasRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions">MaxVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CasRequiredInput`<sup>Optional</sup> <a name="CasRequiredInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput"></a>

```csharp
public object CasRequiredInput { get; }
```

- *Type:* object

---

##### `DeleteVersionAfterInput`<sup>Optional</sup> <a name="DeleteVersionAfterInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput"></a>

```csharp
public double DeleteVersionAfterInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxVersionsInput`<sup>Optional</sup> <a name="MaxVersionsInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput"></a>

```csharp
public double MaxVersionsInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CasRequired`<sup>Required</sup> <a name="CasRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired"></a>

```csharp
public object CasRequired { get; }
```

- *Type:* object

---

##### `DeleteVersionAfter`<sup>Required</sup> <a name="DeleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter"></a>

```csharp
public double DeleteVersionAfter { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxVersions`<sup>Required</sup> <a name="MaxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions"></a>

```csharp
public double MaxVersions { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretBackendV2Config <a name="KvSecretBackendV2Config" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KvSecretBackendV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Mount,
    object CasRequired = null,
    double DeleteVersionAfter = null,
    string Id = null,
    double MaxVersions = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount">Mount</a></code> | <code>string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired">CasRequired</a></code> | <code>object</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>double</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions">MaxVersions</a></code> | <code>double</code> | The number of versions to keep per key. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#mount KvSecretBackendV2#mount}

---

##### `CasRequired`<sup>Optional</sup> <a name="CasRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired"></a>

```csharp
public object CasRequired { get; set; }
```

- *Type:* object

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#cas_required KvSecretBackendV2#cas_required}

---

##### `DeleteVersionAfter`<sup>Optional</sup> <a name="DeleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter"></a>

```csharp
public double DeleteVersionAfter { get; set; }
```

- *Type:* double

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#delete_version_after KvSecretBackendV2#delete_version_after}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxVersions`<sup>Optional</sup> <a name="MaxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions"></a>

```csharp
public double MaxVersions { get; set; }
```

- *Type:* double

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#max_versions KvSecretBackendV2#max_versions}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kv_secret_backend_v2#namespace KvSecretBackendV2#namespace}

---



