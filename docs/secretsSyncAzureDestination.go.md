# `secretsSyncAzureDestination` Submodule <a name="`secretsSyncAzureDestination` Submodule" id="@cdktf/provider-vault.secretsSyncAzureDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAzureDestination <a name="SecretsSyncAzureDestination" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

secretssyncazuredestination.NewSecretsSyncAzureDestination(scope Construct, id *string, config SecretsSyncAzureDestinationConfig) SecretsSyncAzureDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri">ResetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud"></a>

```go
func ResetCloud()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity"></a>

```go
func ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVaultUri` <a name="ResetKeyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri"></a>

```go
func ResetKeyVaultUri()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate"></a>

```go
func ResetSecretNameTemplate()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId"></a>

```go
func ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

secretssyncazuredestination.SecretsSyncAzureDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

secretssyncazuredestination.SecretsSyncAzureDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

secretssyncazuredestination.SecretsSyncAzureDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

secretssyncazuredestination.SecretsSyncAzureDestination_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretsSyncAzureDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretsSyncAzureDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncAzureDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput">CloudInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput">GranularityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput">KeyVaultUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity">Granularity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri">KeyVaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput"></a>

```go
func CloudInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput"></a>

```go
func GranularityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultUriInput`<sup>Optional</sup> <a name="KeyVaultUriInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput"></a>

```go
func KeyVaultUriInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput"></a>

```go
func SecretNameTemplateInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity"></a>

```go
func Granularity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultUri`<sup>Required</sup> <a name="KeyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri"></a>

```go
func KeyVaultUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate"></a>

```go
func SecretNameTemplate() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAzureDestinationConfig <a name="SecretsSyncAzureDestinationConfig" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/secretssyncazuredestination"

&secretssyncazuredestination.SecretsSyncAzureDestinationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ClientId: *string,
	ClientSecret: *string,
	Cloud: *string,
	CustomTags: *map[string]*string,
	Granularity: *string,
	Id: *string,
	KeyVaultUri: *string,
	Namespace: *string,
	SecretNameTemplate: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name">Name</a></code> | <code>*string</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud">Cloud</a></code> | <code>*string</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity">Granularity</a></code> | <code>*string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri">KeyVaultUri</a></code> | <code>*string</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>*string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | ID of the target Azure tenant. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud"></a>

```go
Cloud *string
```

- *Type:* *string

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity"></a>

```go
Granularity *string
```

- *Type:* *string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultUri`<sup>Optional</sup> <a name="KeyVaultUri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri"></a>

```go
KeyVaultUri *string
```

- *Type:* *string

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate"></a>

```go
SecretNameTemplate *string
```

- *Type:* *string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---



