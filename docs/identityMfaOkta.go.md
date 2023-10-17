# `vault_identity_mfa_okta`

Refer to the Terraform Registory for docs: [`vault_identity_mfa_okta`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta).

# `identityMfaOkta` Submodule <a name="`identityMfaOkta` Submodule" id="@cdktf/provider-vault.identityMfaOkta"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaOkta <a name="IdentityMfaOkta" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta vault_identity_mfa_okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

identitymfaokta.NewIdentityMfaOkta(scope Construct, id *string, config IdentityMfaOktaConfig) IdentityMfaOkta
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig">IdentityMfaOktaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig">IdentityMfaOktaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail">ResetPrimaryEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat">ResetUsernameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPrimaryEmail` <a name="ResetPrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetPrimaryEmail"></a>

```go
func ResetPrimaryEmail()
```

##### `ResetUsernameFormat` <a name="ResetUsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.resetUsernameFormat"></a>

```go
func ResetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

identitymfaokta.IdentityMfaOkta_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

identitymfaokta.IdentityMfaOkta_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

identitymfaokta.IdentityMfaOkta_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

identitymfaokta.IdentityMfaOkta_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityMfaOkta resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityMfaOkta to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityMfaOkta that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaOkta to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId">MethodId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput">OrgNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput">PrimaryEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput">UsernameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName">OrgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail">PrimaryEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat">UsernameFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.methodId"></a>

```go
func MethodId() *string
```

- *Type:* *string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.mountAccessor"></a>

```go
func MountAccessor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrgNameInput`<sup>Optional</sup> <a name="OrgNameInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgNameInput"></a>

```go
func OrgNameInput() *string
```

- *Type:* *string

---

##### `PrimaryEmailInput`<sup>Optional</sup> <a name="PrimaryEmailInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmailInput"></a>

```go
func PrimaryEmailInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameFormatInput`<sup>Optional</sup> <a name="UsernameFormatInput" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormatInput"></a>

```go
func UsernameFormatInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.orgName"></a>

```go
func OrgName() *string
```

- *Type:* *string

---

##### `PrimaryEmail`<sup>Required</sup> <a name="PrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.primaryEmail"></a>

```go
func PrimaryEmail() interface{}
```

- *Type:* interface{}

---

##### `UsernameFormat`<sup>Required</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.usernameFormat"></a>

```go
func UsernameFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOkta.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaOktaConfig <a name="IdentityMfaOktaConfig" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/identitymfaokta"

&identitymfaokta.IdentityMfaOktaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiToken: *string,
	OrgName: *string,
	BaseUrl: *string,
	Id: *string,
	Namespace: *string,
	PrimaryEmail: interface{},
	UsernameFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken">ApiToken</a></code> | <code>*string</code> | Okta API token. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName">OrgName</a></code> | <code>*string</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The base domain to use for API requests. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail">PrimaryEmail</a></code> | <code>interface{}</code> | Only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat">UsernameFormat</a></code> | <code>*string</code> | A template string for mapping Identity names to MFA methods. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Okta API token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#api_token IdentityMfaOkta#api_token}

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.orgName"></a>

```go
OrgName *string
```

- *Type:* *string

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#org_name IdentityMfaOkta#org_name}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The base domain to use for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#base_url IdentityMfaOkta#base_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#id IdentityMfaOkta#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#namespace IdentityMfaOkta#namespace}

---

##### `PrimaryEmail`<sup>Optional</sup> <a name="PrimaryEmail" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.primaryEmail"></a>

```go
PrimaryEmail interface{}
```

- *Type:* interface{}

Only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#primary_email IdentityMfaOkta#primary_email}

---

##### `UsernameFormat`<sup>Optional</sup> <a name="UsernameFormat" id="@cdktf/provider-vault.identityMfaOkta.IdentityMfaOktaConfig.property.usernameFormat"></a>

```go
UsernameFormat *string
```

- *Type:* *string

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/identity_mfa_okta#username_format IdentityMfaOkta#username_format}

---



