# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktf/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/awsauthbackendclient"

awsauthbackendclient.NewAwsAuthBackendClient(scope Construct, id *string, config AwsAuthBackendClientConfig) AwsAuthBackendClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config"></a>

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

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetEc2Endpoint` <a name="ResetEc2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```go
func ResetEc2Endpoint()
```

##### `ResetIamEndpoint` <a name="ResetIamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```go
func ResetIamEndpoint()
```

##### `ResetIamServerIdHeaderValue` <a name="ResetIamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```go
func ResetIamServerIdHeaderValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```go
func ResetStsEndpoint()
```

##### `ResetStsRegion` <a name="ResetStsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```go
func ResetStsRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/awsauthbackendclient"

awsauthbackendclient.AwsAuthBackendClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/awsauthbackendclient"

awsauthbackendclient.AwsAuthBackendClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/awsauthbackendclient"

awsauthbackendclient.AwsAuthBackendClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">Ec2EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">IamEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">IamServerIdHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">StsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">StsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">IamEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">StsRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `Ec2EndpointInput`<sup>Optional</sup> <a name="Ec2EndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```go
func Ec2EndpointInput() *string
```

- *Type:* *string

---

##### `IamEndpointInput`<sup>Optional</sup> <a name="IamEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```go
func IamEndpointInput() *string
```

- *Type:* *string

---

##### `IamServerIdHeaderValueInput`<sup>Optional</sup> <a name="IamServerIdHeaderValueInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```go
func IamServerIdHeaderValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```go
func StsEndpointInput() *string
```

- *Type:* *string

---

##### `StsRegionInput`<sup>Optional</sup> <a name="StsRegionInput" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```go
func StsRegionInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Ec2Endpoint`<sup>Required</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```go
func Ec2Endpoint() *string
```

- *Type:* *string

---

##### `IamEndpoint`<sup>Required</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```go
func IamEndpoint() *string
```

- *Type:* *string

---

##### `IamServerIdHeaderValue`<sup>Required</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```go
func IamServerIdHeaderValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `StsEndpoint`<sup>Required</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```go
func StsEndpoint() *string
```

- *Type:* *string

---

##### `StsRegion`<sup>Required</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```go
func StsRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v5/awsauthbackendclient"

&awsauthbackendclient.AwsAuthBackendClientConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessKey: *string,
	Backend: *string,
	Ec2Endpoint: *string,
	IamEndpoint: *string,
	IamServerIdHeaderValue: *string,
	Id: *string,
	Namespace: *string,
	SecretKey: *string,
	StsEndpoint: *string,
	StsRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">AccessKey</a></code> | <code>*string</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>*string</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">IamEndpoint</a></code> | <code>*string</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>*string</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">SecretKey</a></code> | <code>*string</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>*string</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">StsRegion</a></code> | <code>*string</code> | Region to override the default region for making AWS STS API calls. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `Ec2Endpoint`<sup>Optional</sup> <a name="Ec2Endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```go
Ec2Endpoint *string
```

- *Type:* *string

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `IamEndpoint`<sup>Optional</sup> <a name="IamEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```go
IamEndpoint *string
```

- *Type:* *string

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `IamServerIdHeaderValue`<sup>Optional</sup> <a name="IamServerIdHeaderValue" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```go
IamServerIdHeaderValue *string
```

- *Type:* *string

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```go
StsEndpoint *string
```

- *Type:* *string

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```go
StsRegion *string
```

- *Type:* *string

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---


