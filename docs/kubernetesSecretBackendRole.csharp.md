# `vault_kubernetes_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_kubernetes_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role).

# `kubernetesSecretBackendRole` Submodule <a name="`kubernetesSecretBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackendRole <a name="KubernetesSecretBackendRole" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KubernetesSecretBackendRole(Construct Scope, string Id, KubernetesSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations">ResetExtraAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels">ResetExtraLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules">ResetGeneratedRoleRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName">ResetKubernetesRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType">ResetKubernetesRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate">ResetNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl">ResetTokenDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExtraAnnotations` <a name="ResetExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations"></a>

```csharp
private void ResetExtraAnnotations()
```

##### `ResetExtraLabels` <a name="ResetExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels"></a>

```csharp
private void ResetExtraLabels()
```

##### `ResetGeneratedRoleRules` <a name="ResetGeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules"></a>

```csharp
private void ResetGeneratedRoleRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubernetesRoleName` <a name="ResetKubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName"></a>

```csharp
private void ResetKubernetesRoleName()
```

##### `ResetKubernetesRoleType` <a name="ResetKubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType"></a>

```csharp
private void ResetKubernetesRoleType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNameTemplate` <a name="ResetNameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate"></a>

```csharp
private void ResetNameTemplate()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName"></a>

```csharp
private void ResetServiceAccountName()
```

##### `ResetTokenDefaultTtl` <a name="ResetTokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl"></a>

```csharp
private void ResetTokenDefaultTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput">AllowedKubernetesNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput">ExtraAnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput">ExtraLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput">GeneratedRoleRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput">KubernetesRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput">KubernetesRoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput">NameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput">TokenDefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces">AllowedKubernetesNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations">ExtraAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels">ExtraLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules">GeneratedRoleRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName">KubernetesRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType">KubernetesRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate">NameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName">ServiceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl">TokenDefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedKubernetesNamespacesInput`<sup>Optional</sup> <a name="AllowedKubernetesNamespacesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput"></a>

```csharp
public string[] AllowedKubernetesNamespacesInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ExtraAnnotationsInput`<sup>Optional</sup> <a name="ExtraAnnotationsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraAnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraLabelsInput`<sup>Optional</sup> <a name="ExtraLabelsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GeneratedRoleRulesInput`<sup>Optional</sup> <a name="GeneratedRoleRulesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput"></a>

```csharp
public string GeneratedRoleRulesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesRoleNameInput`<sup>Optional</sup> <a name="KubernetesRoleNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput"></a>

```csharp
public string KubernetesRoleNameInput { get; }
```

- *Type:* string

---

##### `KubernetesRoleTypeInput`<sup>Optional</sup> <a name="KubernetesRoleTypeInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput"></a>

```csharp
public string KubernetesRoleTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NameTemplateInput`<sup>Optional</sup> <a name="NameTemplateInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput"></a>

```csharp
public string NameTemplateInput { get; }
```

- *Type:* string

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput"></a>

```csharp
public string ServiceAccountNameInput { get; }
```

- *Type:* string

---

##### `TokenDefaultTtlInput`<sup>Optional</sup> <a name="TokenDefaultTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput"></a>

```csharp
public double TokenDefaultTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `AllowedKubernetesNamespaces`<sup>Required</sup> <a name="AllowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces"></a>

```csharp
public string[] AllowedKubernetesNamespaces { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `ExtraAnnotations`<sup>Required</sup> <a name="ExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraAnnotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraLabels`<sup>Required</sup> <a name="ExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GeneratedRoleRules`<sup>Required</sup> <a name="GeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules"></a>

```csharp
public string GeneratedRoleRules { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesRoleName`<sup>Required</sup> <a name="KubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName"></a>

```csharp
public string KubernetesRoleName { get; }
```

- *Type:* string

---

##### `KubernetesRoleType`<sup>Required</sup> <a name="KubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType"></a>

```csharp
public string KubernetesRoleType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NameTemplate`<sup>Required</sup> <a name="NameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate"></a>

```csharp
public string NameTemplate { get; }
```

- *Type:* string

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName"></a>

```csharp
public string ServiceAccountName { get; }
```

- *Type:* string

---

##### `TokenDefaultTtl`<sup>Required</sup> <a name="TokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl"></a>

```csharp
public double TokenDefaultTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendRoleConfig <a name="KubernetesSecretBackendRoleConfig" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KubernetesSecretBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedKubernetesNamespaces,
    string Backend,
    string Name,
    System.Collections.Generic.IDictionary<string, string> ExtraAnnotations = null,
    System.Collections.Generic.IDictionary<string, string> ExtraLabels = null,
    string GeneratedRoleRules = null,
    string Id = null,
    string KubernetesRoleName = null,
    string KubernetesRoleType = null,
    string Namespace = null,
    string NameTemplate = null,
    string ServiceAccountName = null,
    double TokenDefaultTtl = null,
    double TokenMaxTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces">AllowedKubernetesNamespaces</a></code> | <code>string[]</code> | The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations">ExtraAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels">ExtraLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules">GeneratedRoleRules</a></code> | <code>string</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName">KubernetesRoleName</a></code> | <code>string</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType">KubernetesRoleType</a></code> | <code>string</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate">NameTemplate</a></code> | <code>string</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>string</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl">TokenDefaultTtl</a></code> | <code>double</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedKubernetesNamespaces`<sup>Required</sup> <a name="AllowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces"></a>

```csharp
public string[] AllowedKubernetesNamespaces { get; set; }
```

- *Type:* string[]

The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `ExtraAnnotations`<sup>Optional</sup> <a name="ExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraAnnotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `ExtraLabels`<sup>Optional</sup> <a name="ExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `GeneratedRoleRules`<sup>Optional</sup> <a name="GeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules"></a>

```csharp
public string GeneratedRoleRules { get; set; }
```

- *Type:* string

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesRoleName`<sup>Optional</sup> <a name="KubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName"></a>

```csharp
public string KubernetesRoleName { get; set; }
```

- *Type:* string

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `KubernetesRoleType`<sup>Optional</sup> <a name="KubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType"></a>

```csharp
public string KubernetesRoleType { get; set; }
```

- *Type:* string

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `NameTemplate`<sup>Optional</sup> <a name="NameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate"></a>

```csharp
public string NameTemplate { get; set; }
```

- *Type:* string

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName"></a>

```csharp
public string ServiceAccountName { get; set; }
```

- *Type:* string

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `TokenDefaultTtl`<sup>Optional</sup> <a name="TokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl"></a>

```csharp
public double TokenDefaultTtl { get; set; }
```

- *Type:* double

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---



