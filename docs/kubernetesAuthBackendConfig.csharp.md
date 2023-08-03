# `vault_kubernetes_auth_backend_config`

Refer to the Terraform Registory for docs: [`vault_kubernetes_auth_backend_config`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config).

# `kubernetesAuthBackendConfig` Submodule <a name="`kubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.kubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendConfig <a name="KubernetesAuthBackendConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KubernetesAuthBackendConfig(Construct Scope, string Id, KubernetesAuthBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig">KubernetesAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig">KubernetesAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation">ResetDisableIssValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt">ResetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys">ResetPemKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt">ResetTokenReviewerJwt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetDisableIssValidation` <a name="ResetDisableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```csharp
private void ResetDisableIssValidation()
```

##### `ResetDisableLocalCaJwt` <a name="ResetDisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```csharp
private void ResetDisableLocalCaJwt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```csharp
private void ResetKubernetesCaCert()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPemKeys` <a name="ResetPemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys"></a>

```csharp
private void ResetPemKeys()
```

##### `ResetTokenReviewerJwt` <a name="ResetTokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt"></a>

```csharp
private void ResetTokenReviewerJwt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesAuthBackendConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesAuthBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

KubernetesAuthBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput">DisableIssValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput">DisableLocalCaJwtInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput">KubernetesHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput">PemKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput">TokenReviewerJwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation">DisableIssValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost">KubernetesHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys">PemKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt">TokenReviewerJwt</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisableIssValidationInput`<sup>Optional</sup> <a name="DisableIssValidationInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```csharp
public object DisableIssValidationInput { get; }
```

- *Type:* object

---

##### `DisableLocalCaJwtInput`<sup>Optional</sup> <a name="DisableLocalCaJwtInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```csharp
public object DisableLocalCaJwtInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```csharp
public string KubernetesCaCertInput { get; }
```

- *Type:* string

---

##### `KubernetesHostInput`<sup>Optional</sup> <a name="KubernetesHostInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```csharp
public string KubernetesHostInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PemKeysInput`<sup>Optional</sup> <a name="PemKeysInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput"></a>

```csharp
public string[] PemKeysInput { get; }
```

- *Type:* string[]

---

##### `TokenReviewerJwtInput`<sup>Optional</sup> <a name="TokenReviewerJwtInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput"></a>

```csharp
public string TokenReviewerJwtInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisableIssValidation`<sup>Required</sup> <a name="DisableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation"></a>

```csharp
public object DisableIssValidation { get; }
```

- *Type:* object

---

##### `DisableLocalCaJwt`<sup>Required</sup> <a name="DisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```csharp
public object DisableLocalCaJwt { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; }
```

- *Type:* string

---

##### `KubernetesHost`<sup>Required</sup> <a name="KubernetesHost" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost"></a>

```csharp
public string KubernetesHost { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PemKeys`<sup>Required</sup> <a name="PemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys"></a>

```csharp
public string[] PemKeys { get; }
```

- *Type:* string[]

---

##### `TokenReviewerJwt`<sup>Required</sup> <a name="TokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt"></a>

```csharp
public string TokenReviewerJwt { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendConfigConfig <a name="KubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new KubernetesAuthBackendConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KubernetesHost,
    string Backend = null,
    object DisableIssValidation = null,
    object DisableLocalCaJwt = null,
    string Id = null,
    string Issuer = null,
    string KubernetesCaCert = null,
    string Namespace = null,
    string[] PemKeys = null,
    string TokenReviewerJwt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost">KubernetesHost</a></code> | <code>string</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation">DisableIssValidation</a></code> | <code>object</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>object</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer">Issuer</a></code> | <code>string</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys">PemKeys</a></code> | <code>string[]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt">TokenReviewerJwt</a></code> | <code>string</code> | A service account JWT used to access the TokenReview API to validate other JWTs during login. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KubernetesHost`<sup>Required</sup> <a name="KubernetesHost" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```csharp
public string KubernetesHost { get; set; }
```

- *Type:* string

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `DisableIssValidation`<sup>Optional</sup> <a name="DisableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```csharp
public object DisableIssValidation { get; set; }
```

- *Type:* object

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `DisableLocalCaJwt`<sup>Optional</sup> <a name="DisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```csharp
public object DisableLocalCaJwt { get; set; }
```

- *Type:* object

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; set; }
```

- *Type:* string

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `PemKeys`<sup>Optional</sup> <a name="PemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```csharp
public string[] PemKeys { get; set; }
```

- *Type:* string[]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `TokenReviewerJwt`<sup>Optional</sup> <a name="TokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt"></a>

```csharp
public string TokenReviewerJwt { get; set; }
```

- *Type:* string

A service account JWT used to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---



