# `spiffeAuthBackendConfig` Submodule <a name="`spiffeAuthBackendConfig` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendConfig <a name="SpiffeAuthBackendConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

spiffeauthbackendconfig.NewSpiffeAuthBackendConfig(scope Construct, id *string, config SpiffeAuthBackendConfigConfig) SpiffeAuthBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle">ResetBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch">ResetDeferBundleFetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem">ResetEndpointRootCaTruststorePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId">ResetEndpointSpiffeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl">ResetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetBundle` <a name="ResetBundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle"></a>

```go
func ResetBundle()
```

##### `ResetDeferBundleFetch` <a name="ResetDeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch"></a>

```go
func ResetDeferBundleFetch()
```

##### `ResetEndpointRootCaTruststorePem` <a name="ResetEndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem"></a>

```go
func ResetEndpointRootCaTruststorePem()
```

##### `ResetEndpointSpiffeId` <a name="ResetEndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId"></a>

```go
func ResetEndpointSpiffeId()
```

##### `ResetEndpointUrl` <a name="ResetEndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl"></a>

```go
func ResetEndpointUrl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

spiffeauthbackendconfig.SpiffeAuthBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

spiffeauthbackendconfig.SpiffeAuthBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

spiffeauthbackendconfig.SpiffeAuthBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

spiffeauthbackendconfig.SpiffeAuthBackendConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpiffeAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpiffeAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput">AudienceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput">BundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput">DeferBundleFetchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput">EndpointRootCaTruststorePemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput">EndpointSpiffeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput">EndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput">TrustDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience">Audience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle">Bundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch">DeferBundleFetch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem">EndpointRootCaTruststorePem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId">EndpointSpiffeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput"></a>

```go
func AudienceInput() *[]*string
```

- *Type:* *[]*string

---

##### `BundleInput`<sup>Optional</sup> <a name="BundleInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput"></a>

```go
func BundleInput() *string
```

- *Type:* *string

---

##### `DeferBundleFetchInput`<sup>Optional</sup> <a name="DeferBundleFetchInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput"></a>

```go
func DeferBundleFetchInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointRootCaTruststorePemInput`<sup>Optional</sup> <a name="EndpointRootCaTruststorePemInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput"></a>

```go
func EndpointRootCaTruststorePemInput() *string
```

- *Type:* *string

---

##### `EndpointSpiffeIdInput`<sup>Optional</sup> <a name="EndpointSpiffeIdInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput"></a>

```go
func EndpointSpiffeIdInput() *string
```

- *Type:* *string

---

##### `EndpointUrlInput`<sup>Optional</sup> <a name="EndpointUrlInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput"></a>

```go
func EndpointUrlInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput"></a>

```go
func TrustDomainInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience"></a>

```go
func Audience() *[]*string
```

- *Type:* *[]*string

---

##### `Bundle`<sup>Required</sup> <a name="Bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle"></a>

```go
func Bundle() *string
```

- *Type:* *string

---

##### `DeferBundleFetch`<sup>Required</sup> <a name="DeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch"></a>

```go
func DeferBundleFetch() interface{}
```

- *Type:* interface{}

---

##### `EndpointRootCaTruststorePem`<sup>Required</sup> <a name="EndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem"></a>

```go
func EndpointRootCaTruststorePem() *string
```

- *Type:* *string

---

##### `EndpointSpiffeId`<sup>Required</sup> <a name="EndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId"></a>

```go
func EndpointSpiffeId() *string
```

- *Type:* *string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain"></a>

```go
func TrustDomain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendConfigConfig <a name="SpiffeAuthBackendConfigConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/spiffeauthbackendconfig"

&spiffeauthbackendconfig.SpiffeAuthBackendConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Profile: *string,
	TrustDomain: *string,
	Audience: *[]*string,
	Bundle: *string,
	DeferBundleFetch: interface{},
	EndpointRootCaTruststorePem: *string,
	EndpointSpiffeId: *string,
	EndpointUrl: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile">Profile</a></code> | <code>*string</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience">Audience</a></code> | <code>*[]*string</code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle">Bundle</a></code> | <code>*string</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch">DeferBundleFetch</a></code> | <code>interface{}</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem">EndpointRootCaTruststorePem</a></code> | <code>*string</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId">EndpointSpiffeId</a></code> | <code>*string</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain"></a>

```go
TrustDomain *string
```

- *Type:* *string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience"></a>

```go
Audience *[]*string
```

- *Type:* *[]*string

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `Bundle`<sup>Optional</sup> <a name="Bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle"></a>

```go
Bundle *string
```

- *Type:* *string

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `DeferBundleFetch`<sup>Optional</sup> <a name="DeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch"></a>

```go
DeferBundleFetch interface{}
```

- *Type:* interface{}

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `EndpointRootCaTruststorePem`<sup>Optional</sup> <a name="EndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem"></a>

```go
EndpointRootCaTruststorePem *string
```

- *Type:* *string

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `EndpointSpiffeId`<sup>Optional</sup> <a name="EndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId"></a>

```go
EndpointSpiffeId *string
```

- *Type:* *string

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `EndpointUrl`<sup>Optional</sup> <a name="EndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl"></a>

```go
EndpointUrl *string
```

- *Type:* *string

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---



