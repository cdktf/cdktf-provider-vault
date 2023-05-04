# `vault_quota_rate_limit`

Refer to the Terraform Registory for docs: [`vault_quota_rate_limit`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit).

# `quotaRateLimit` Submodule <a name="`quotaRateLimit` Submodule" id="@cdktf/provider-vault.quotaRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaRateLimit <a name="QuotaRateLimit" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit vault_quota_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/quotaratelimit"

quotaratelimit.NewQuotaRateLimit(scope Construct, id *string, config QuotaRateLimitConfig) QuotaRateLimit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig">QuotaRateLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig">QuotaRateLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval">ResetBlockInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBlockInterval` <a name="ResetBlockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval"></a>

```go
func ResetBlockInterval()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId"></a>

```go
func ResetId()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath"></a>

```go
func ResetPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/quotaratelimit"

quotaratelimit.QuotaRateLimit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/quotaratelimit"

quotaratelimit.QuotaRateLimit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/quotaratelimit"

quotaratelimit.QuotaRateLimit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput">BlockIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput">RateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval">BlockInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate">Rate</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockIntervalInput`<sup>Optional</sup> <a name="BlockIntervalInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput"></a>

```go
func BlockIntervalInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput"></a>

```go
func RateInput() *f64
```

- *Type:* *f64

---

##### `BlockInterval`<sup>Required</sup> <a name="BlockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval"></a>

```go
func BlockInterval() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate"></a>

```go
func Rate() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaRateLimitConfig <a name="QuotaRateLimitConfig" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/quotaratelimit"

&quotaratelimit.QuotaRateLimitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Rate: *f64,
	BlockInterval: *f64,
	Id: *string,
	Interval: *f64,
	Namespace: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name">Name</a></code> | <code>*string</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate">Rate</a></code> | <code>*f64</code> | The maximum number of requests at any given second to be allowed by the quota rule. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval">BlockInterval</a></code> | <code>*f64</code> | If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#id QuotaRateLimit#id}. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval">Interval</a></code> | <code>*f64</code> | The duration in seconds to enforce rate limiting for. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path">Path</a></code> | <code>*string</code> | Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#name QuotaRateLimit#name}

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate"></a>

```go
Rate *f64
```

- *Type:* *f64

The maximum number of requests at any given second to be allowed by the quota rule.

The rate must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}

---

##### `BlockInterval`<sup>Optional</sup> <a name="BlockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval"></a>

```go
BlockInterval *f64
```

- *Type:* *f64

If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#id QuotaRateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

The duration in seconds to enforce rate limiting for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/quota_rate_limit#path QuotaRateLimit#path}

---



