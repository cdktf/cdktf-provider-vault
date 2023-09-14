# `vault_gcp_auth_backend`

Refer to the Terraform Registory for docs: [`vault_gcp_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend).

# `gcpAuthBackend` Submodule <a name="`gcpAuthBackend` Submodule" id="@cdktf/provider-vault.gcpAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackend <a name="GcpAuthBackend" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend vault_gcp_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackend(Construct Scope, string Id, GcpAuthBackendConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig">GcpAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig">GcpAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint">PutCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail">ResetClientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId">ResetPrivateKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCustomEndpoint` <a name="PutCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint"></a>

```csharp
private void PutCustomEndpoint(GcpAuthBackendCustomEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---

##### `ResetClientEmail` <a name="ResetClientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail"></a>

```csharp
private void ResetClientEmail()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint"></a>

```csharp
private void ResetCustomEndpoint()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPrivateKeyId` <a name="ResetPrivateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId"></a>

```csharp
private void ResetPrivateKeyId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

GcpAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput">CustomEndpointInput</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput">LocalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount">DisableRemount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local">Local</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint"></a>

```csharp
public GcpAuthBackendCustomEndpointOutputReference CustomEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a>

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput"></a>

```csharp
public GcpAuthBackendCustomEndpoint CustomEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput"></a>

```csharp
public object DisableRemountInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput"></a>

```csharp
public object LocalInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount"></a>

```csharp
public object DisableRemount { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local"></a>

```csharp
public object Local { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendConfig <a name="GcpAuthBackendConfig" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientEmail = null,
    string ClientId = null,
    string Credentials = null,
    GcpAuthBackendCustomEndpoint CustomEndpoint = null,
    string Description = null,
    object DisableRemount = null,
    string Id = null,
    object Local = null,
    string Namespace = null,
    string Path = null,
    string PrivateKeyId = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>object</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local">Local</a></code> | <code>object</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientEmail`<sup>Optional</sup> <a name="ClientEmail" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}.

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint"></a>

```csharp
public GcpAuthBackendCustomEndpoint CustomEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}.

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount"></a>

```csharp
public object DisableRemount { get; set; }
```

- *Type:* object

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local"></a>

```csharp
public object Local { get; set; }
```

- *Type:* object

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#local GcpAuthBackend#local}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#namespace GcpAuthBackend#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}.

---

##### `PrivateKeyId`<sup>Optional</sup> <a name="PrivateKeyId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}.

---

### GcpAuthBackendCustomEndpoint <a name="GcpAuthBackendCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackendCustomEndpoint {
    string Api = null,
    string Compute = null,
    string Crm = null,
    string Iam = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api">Api</a></code> | <code>string</code> | Replaces the service endpoint used in API requests to https://www.googleapis.com. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute">Compute</a></code> | <code>string</code> | Replaces the service endpoint used in API requests to `https://compute.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm">Crm</a></code> | <code>string</code> | Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam">Iam</a></code> | <code>string</code> | Replaces the service endpoint used in API requests to `https://iam.googleapis.com`. |

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

Replaces the service endpoint used in API requests to https://www.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#api GcpAuthBackend#api}

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute"></a>

```csharp
public string Compute { get; set; }
```

- *Type:* string

Replaces the service endpoint used in API requests to `https://compute.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#compute GcpAuthBackend#compute}

---

##### `Crm`<sup>Optional</sup> <a name="Crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm"></a>

```csharp
public string Crm { get; set; }
```

- *Type:* string

Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#crm GcpAuthBackend#crm}

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam"></a>

```csharp
public string Iam { get; set; }
```

- *Type:* string

Replaces the service endpoint used in API requests to `https://iam.googleapis.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/gcp_auth_backend#iam GcpAuthBackend#iam}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpAuthBackendCustomEndpointOutputReference <a name="GcpAuthBackendCustomEndpointOutputReference" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new GcpAuthBackendCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm">ResetCrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam">ResetIam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApi` <a name="ResetApi" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi"></a>

```csharp
private void ResetApi()
```

##### `ResetCompute` <a name="ResetCompute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute"></a>

```csharp
private void ResetCompute()
```

##### `ResetCrm` <a name="ResetCrm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm"></a>

```csharp
private void ResetCrm()
```

##### `ResetIam` <a name="ResetIam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam"></a>

```csharp
private void ResetIam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput">ComputeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput">CrmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput">IamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute">Compute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm">Crm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam">Iam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput"></a>

```csharp
public string ComputeInput { get; }
```

- *Type:* string

---

##### `CrmInput`<sup>Optional</sup> <a name="CrmInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput"></a>

```csharp
public string CrmInput { get; }
```

- *Type:* string

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput"></a>

```csharp
public string IamInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute"></a>

```csharp
public string Compute { get; }
```

- *Type:* string

---

##### `Crm`<sup>Required</sup> <a name="Crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm"></a>

```csharp
public string Crm { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam"></a>

```csharp
public string Iam { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public GcpAuthBackendCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---



