# `vault_aws_auth_backend_client`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_client`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client).

# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktf/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendClient(Construct Scope, string Id, AwsAuthBackendClientConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint">ResetEc2Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint">ResetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue">ResetIamServerIdHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint">ResetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion">ResetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient">ResetUseStsRegionFromClient</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetEc2Endpoint` <a name="ResetEc2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```csharp
private void ResetEc2Endpoint()
```

##### `ResetIamEndpoint` <a name="ResetIamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```csharp
private void ResetIamEndpoint()
```

##### `ResetIamServerIdHeaderValue` <a name="ResetIamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```csharp
private void ResetIamServerIdHeaderValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```csharp
private void ResetStsEndpoint()
```

##### `ResetStsRegion` <a name="ResetStsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```csharp
private void ResetStsRegion()
```

##### `ResetUseStsRegionFromClient` <a name="ResetUseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient"></a>

```csharp
private void ResetUseStsRegionFromClient()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

AwsAuthBackendClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">Ec2EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">IamEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">IamServerIdHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">StsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">StsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput">UseStsRegionFromClientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">StsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `Ec2EndpointInput`<sup>Optional</sup> <a name="Ec2EndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```csharp
public string Ec2EndpointInput { get; }
```

- *Type:* string

---

##### `IamEndpointInput`<sup>Optional</sup> <a name="IamEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```csharp
public string IamEndpointInput { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValueInput`<sup>Optional</sup> <a name="IamServerIdHeaderValueInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```csharp
public string IamServerIdHeaderValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```csharp
public string StsEndpointInput { get; }
```

- *Type:* string

---

##### `StsRegionInput`<sup>Optional</sup> <a name="StsRegionInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```csharp
public string StsRegionInput { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClientInput`<sup>Optional</sup> <a name="UseStsRegionFromClientInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput"></a>

```csharp
public object UseStsRegionFromClientInput { get; }
```

- *Type:* object

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Ec2Endpoint`<sup>Required</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; }
```

- *Type:* string

---

##### `IamEndpoint`<sup>Required</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValue`<sup>Required</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `StsEndpoint`<sup>Required</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; }
```

- *Type:* string

---

##### `StsRegion`<sup>Required</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```csharp
public string StsRegion { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClient`<sup>Required</sup> <a name="UseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient"></a>

```csharp
public object UseStsRegionFromClient { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new AwsAuthBackendClientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessKey = null,
    string Backend = null,
    string Ec2Endpoint = null,
    string IamEndpoint = null,
    string IamServerIdHeaderValue = null,
    string Id = null,
    string Namespace = null,
    string SecretKey = null,
    string StsEndpoint = null,
    string StsRegion = null,
    object UseStsRegionFromClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">StsRegion</a></code> | <code>string</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>object</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `Ec2Endpoint`<sup>Optional</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `IamEndpoint`<sup>Optional</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `IamServerIdHeaderValue`<sup>Optional</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; set; }
```

- *Type:* string

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```csharp
public string StsRegion { get; set; }
```

- *Type:* string

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `UseStsRegionFromClient`<sup>Optional</sup> <a name="UseStsRegionFromClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient"></a>

```csharp
public object UseStsRegionFromClient { get; set; }
```

- *Type:* object

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---



