# `identityOidcClient` Submodule <a name="`identityOidcClient` Submodule" id="@cdktf/provider-vault.identityOidcClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcClient <a name="IdentityOidcClient" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client vault_identity_oidc_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

identityoidcclient.NewIdentityOidcClient(scope Construct, id *string, config IdentityOidcClientConfig) IdentityOidcClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl">ResetAccessTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments">ResetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType">ResetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl">ResetIdTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessTokenTtl` <a name="ResetAccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl"></a>

```go
func ResetAccessTokenTtl()
```

##### `ResetAssignments` <a name="ResetAssignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments"></a>

```go
func ResetAssignments()
```

##### `ResetClientType` <a name="ResetClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType"></a>

```go
func ResetClientType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId"></a>

```go
func ResetId()
```

##### `ResetIdTokenTtl` <a name="ResetIdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl"></a>

```go
func ResetIdTokenTtl()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey"></a>

```go
func ResetKey()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

identityoidcclient.IdentityOidcClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

identityoidcclient.IdentityOidcClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

identityoidcclient.IdentityOidcClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

identityoidcclient.IdentityOidcClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityOidcClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityOidcClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput">AccessTokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput">AssignmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput">ClientTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput">IdTokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl">AccessTokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments">Assignments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType">ClientType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl">IdTokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `AccessTokenTtlInput`<sup>Optional</sup> <a name="AccessTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput"></a>

```go
func AccessTokenTtlInput() *f64
```

- *Type:* *f64

---

##### `AssignmentsInput`<sup>Optional</sup> <a name="AssignmentsInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput"></a>

```go
func AssignmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientTypeInput`<sup>Optional</sup> <a name="ClientTypeInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput"></a>

```go
func ClientTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdTokenTtlInput`<sup>Optional</sup> <a name="IdTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput"></a>

```go
func IdTokenTtlInput() *f64
```

- *Type:* *f64

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokenTtl`<sup>Required</sup> <a name="AccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl"></a>

```go
func AccessTokenTtl() *f64
```

- *Type:* *f64

---

##### `Assignments`<sup>Required</sup> <a name="Assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments"></a>

```go
func Assignments() *[]*string
```

- *Type:* *[]*string

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType"></a>

```go
func ClientType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdTokenTtl`<sup>Required</sup> <a name="IdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl"></a>

```go
func IdTokenTtl() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcClientConfig <a name="IdentityOidcClientConfig" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidcclient"

&identityoidcclient.IdentityOidcClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessTokenTtl: *f64,
	Assignments: *[]*string,
	ClientType: *string,
	Id: *string,
	IdTokenTtl: *f64,
	Key: *string,
	Namespace: *string,
	RedirectUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name">Name</a></code> | <code>*string</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl">AccessTokenTtl</a></code> | <code>*f64</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments">Assignments</a></code> | <code>*[]*string</code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType">ClientType</a></code> | <code>*string</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl">IdTokenTtl</a></code> | <code>*f64</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key">Key</a></code> | <code>*string</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | Redirection URI values used by the client. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `AccessTokenTtl`<sup>Optional</sup> <a name="AccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl"></a>

```go
AccessTokenTtl *f64
```

- *Type:* *f64

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `Assignments`<sup>Optional</sup> <a name="Assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments"></a>

```go
Assignments *[]*string
```

- *Type:* *[]*string

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `ClientType`<sup>Optional</sup> <a name="ClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType"></a>

```go
ClientType *string
```

- *Type:* *string

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdTokenTtl`<sup>Optional</sup> <a name="IdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl"></a>

```go
IdTokenTtl *f64
```

- *Type:* *f64

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---



