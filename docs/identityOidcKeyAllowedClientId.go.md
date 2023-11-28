# `identityOidcKeyAllowedClientId` Submodule <a name="`identityOidcKeyAllowedClientId` Submodule" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcKeyAllowedClientId <a name="IdentityOidcKeyAllowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id vault_identity_oidc_key_allowed_client_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

identityoidckeyallowedclientid.NewIdentityOidcKeyAllowedClientId(scope Construct, id *string, config IdentityOidcKeyAllowedClientIdConfig) IdentityOidcKeyAllowedClientId
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig">IdentityOidcKeyAllowedClientIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig">IdentityOidcKeyAllowedClientIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

identityoidckeyallowedclientid.IdentityOidcKeyAllowedClientId_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

identityoidckeyallowedclientid.IdentityOidcKeyAllowedClientId_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

identityoidckeyallowedclientid.IdentityOidcKeyAllowedClientId_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

identityoidckeyallowedclientid.IdentityOidcKeyAllowedClientId_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityOidcKeyAllowedClientId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityOidcKeyAllowedClientId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcKeyAllowedClientId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput">AllowedClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId">AllowedClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedClientIdInput`<sup>Optional</sup> <a name="AllowedClientIdInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput"></a>

```go
func AllowedClientIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AllowedClientId`<sup>Required</sup> <a name="AllowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId"></a>

```go
func AllowedClientId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcKeyAllowedClientIdConfig <a name="IdentityOidcKeyAllowedClientIdConfig" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identityoidckeyallowedclientid"

&identityoidckeyallowedclientid.IdentityOidcKeyAllowedClientIdConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedClientId: *string,
	KeyName: *string,
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId">AllowedClientId</a></code> | <code>*string</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Name of the key. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedClientId`<sup>Required</sup> <a name="AllowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId"></a>

```go
AllowedClientId *string
```

- *Type:* *string

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---



