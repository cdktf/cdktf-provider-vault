# `vault_aws_auth_backend_role_tag`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_role_tag`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag).

# `awsAuthBackendRoleTag` Submodule <a name="`awsAuthBackendRoleTag` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoleTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoleTag <a name="AwsAuthBackendRoleTag" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag vault_aws_auth_backend_role_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/awsauthbackendroletag"

awsauthbackendroletag.NewAwsAuthBackendRoleTag(scope Construct, id *string, config AwsAuthBackendRoleTagConfig) AwsAuthBackendRoleTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig">AwsAuthBackendRoleTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig">AwsAuthBackendRoleTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration">ResetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication">ResetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowInstanceMigration` <a name="ResetAllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration"></a>

```go
func ResetAllowInstanceMigration()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetDisallowReauthentication` <a name="ResetDisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication"></a>

```go
func ResetDisallowReauthentication()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies"></a>

```go
func ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/awsauthbackendroletag"

awsauthbackendroletag.AwsAuthBackendRoleTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/awsauthbackendroletag"

awsauthbackendroletag.AwsAuthBackendRoleTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/awsauthbackendroletag"

awsauthbackendroletag.AwsAuthBackendRoleTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput">AllowInstanceMigrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput">DisallowReauthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `AllowInstanceMigrationInput`<sup>Optional</sup> <a name="AllowInstanceMigrationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput"></a>

```go
func AllowInstanceMigrationInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DisallowReauthenticationInput`<sup>Optional</sup> <a name="DisallowReauthenticationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput"></a>

```go
func DisallowReauthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `AllowInstanceMigration`<sup>Required</sup> <a name="AllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration"></a>

```go
func AllowInstanceMigration() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DisallowReauthentication`<sup>Required</sup> <a name="DisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication"></a>

```go
func DisallowReauthentication() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleTagConfig <a name="AwsAuthBackendRoleTagConfig" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v9/awsauthbackendroletag"

&awsauthbackendroletag.AwsAuthBackendRoleTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	AllowInstanceMigration: interface{},
	Backend: *string,
	DisallowReauthentication: interface{},
	Id: *string,
	InstanceId: *string,
	MaxTtl: *string,
	Namespace: *string,
	Policies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role">Role</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>interface{}</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend">Backend</a></code> | <code>*string</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>interface{}</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | Policies to be associated with the tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `AllowInstanceMigration`<sup>Optional</sup> <a name="AllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration"></a>

```go
AllowInstanceMigration interface{}
```

- *Type:* interface{}

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `DisallowReauthentication`<sup>Optional</sup> <a name="DisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication"></a>

```go
DisallowReauthentication interface{}
```

- *Type:* interface{}

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---



