# `tokenAuthBackendRole` Submodule <a name="`tokenAuthBackendRole` Submodule" id="@cdktf/provider-vault.tokenAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthBackendRole <a name="TokenAuthBackendRole" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role vault_token_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

tokenauthbackendrole.NewTokenAuthBackendRole(scope Construct, id *string, config TokenAuthBackendRoleConfig) TokenAuthBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig">TokenAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases">ResetAllowedEntityAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies">ResetAllowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob">ResetAllowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies">ResetDisallowedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob">ResetDisallowedPoliciesGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan">ResetOrphan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix">ResetPathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedEntityAliases` <a name="ResetAllowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedEntityAliases"></a>

```go
func ResetAllowedEntityAliases()
```

##### `ResetAllowedPolicies` <a name="ResetAllowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPolicies"></a>

```go
func ResetAllowedPolicies()
```

##### `ResetAllowedPoliciesGlob` <a name="ResetAllowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetAllowedPoliciesGlob"></a>

```go
func ResetAllowedPoliciesGlob()
```

##### `ResetDisallowedPolicies` <a name="ResetDisallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPolicies"></a>

```go
func ResetDisallowedPolicies()
```

##### `ResetDisallowedPoliciesGlob` <a name="ResetDisallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetDisallowedPoliciesGlob"></a>

```go
func ResetDisallowedPoliciesGlob()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOrphan` <a name="ResetOrphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetOrphan"></a>

```go
func ResetOrphan()
```

##### `ResetPathSuffix` <a name="ResetPathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetPathSuffix"></a>

```go
func ResetPathSuffix()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetRenewable"></a>

```go
func ResetRenewable()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.resetTokenType"></a>

```go
func ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

tokenauthbackendrole.TokenAuthBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

tokenauthbackendrole.TokenAuthBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

tokenauthbackendrole.TokenAuthBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

tokenauthbackendrole.TokenAuthBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TokenAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TokenAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TokenAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TokenAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput">AllowedEntityAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput">AllowedPoliciesGlobInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput">AllowedPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput">DisallowedPoliciesGlobInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput">DisallowedPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput">OrphanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput">PathSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput">RenewableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases">AllowedEntityAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies">AllowedPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob">AllowedPoliciesGlob</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies">DisallowedPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob">DisallowedPoliciesGlob</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan">Orphan</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix">PathSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable">Renewable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedEntityAliasesInput`<sup>Optional</sup> <a name="AllowedEntityAliasesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliasesInput"></a>

```go
func AllowedEntityAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedPoliciesGlobInput`<sup>Optional</sup> <a name="AllowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlobInput"></a>

```go
func AllowedPoliciesGlobInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedPoliciesInput`<sup>Optional</sup> <a name="AllowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesInput"></a>

```go
func AllowedPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedPoliciesGlobInput`<sup>Optional</sup> <a name="DisallowedPoliciesGlobInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlobInput"></a>

```go
func DisallowedPoliciesGlobInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedPoliciesInput`<sup>Optional</sup> <a name="DisallowedPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesInput"></a>

```go
func DisallowedPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrphanInput`<sup>Optional</sup> <a name="OrphanInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphanInput"></a>

```go
func OrphanInput() interface{}
```

- *Type:* interface{}

---

##### `PathSuffixInput`<sup>Optional</sup> <a name="PathSuffixInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffixInput"></a>

```go
func PathSuffixInput() *string
```

- *Type:* *string

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewableInput"></a>

```go
func RenewableInput() interface{}
```

- *Type:* interface{}

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AllowedEntityAliases`<sup>Required</sup> <a name="AllowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedEntityAliases"></a>

```go
func AllowedEntityAliases() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedPolicies`<sup>Required</sup> <a name="AllowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPolicies"></a>

```go
func AllowedPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedPoliciesGlob`<sup>Required</sup> <a name="AllowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.allowedPoliciesGlob"></a>

```go
func AllowedPoliciesGlob() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedPolicies`<sup>Required</sup> <a name="DisallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPolicies"></a>

```go
func DisallowedPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedPoliciesGlob`<sup>Required</sup> <a name="DisallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.disallowedPoliciesGlob"></a>

```go
func DisallowedPoliciesGlob() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.orphan"></a>

```go
func Orphan() interface{}
```

- *Type:* interface{}

---

##### `PathSuffix`<sup>Required</sup> <a name="PathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.pathSuffix"></a>

```go
func PathSuffix() *string
```

- *Type:* *string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.renewable"></a>

```go
func Renewable() interface{}
```

- *Type:* interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenAuthBackendRoleConfig <a name="TokenAuthBackendRoleConfig" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/tokenauthbackendrole"

&tokenauthbackendrole.TokenAuthBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RoleName: *string,
	AllowedEntityAliases: *[]*string,
	AllowedPolicies: *[]*string,
	AllowedPoliciesGlob: *[]*string,
	DisallowedPolicies: *[]*string,
	DisallowedPoliciesGlob: *[]*string,
	Id: *string,
	Namespace: *string,
	Orphan: interface{},
	PathSuffix: *string,
	Renewable: interface{},
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases">AllowedEntityAliases</a></code> | <code>*[]*string</code> | Set of allowed entity aliases for this role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies">AllowedPolicies</a></code> | <code>*[]*string</code> | List of allowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob">AllowedPoliciesGlob</a></code> | <code>*[]*string</code> | Set of allowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies">DisallowedPolicies</a></code> | <code>*[]*string</code> | List of disallowed policies for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob">DisallowedPoliciesGlob</a></code> | <code>*[]*string</code> | Set of disallowed policies with glob match for given role. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan">Orphan</a></code> | <code>interface{}</code> | If true, tokens created against this policy will be orphan tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix">PathSuffix</a></code> | <code>*string</code> | Tokens created against this role will have the given suffix as part of their path in addition to the role name. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable">Renewable</a></code> | <code>interface{}</code> | Whether to disable the ability of the token to be renewed past its initial TTL. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#role_name TokenAuthBackendRole#role_name}

---

##### `AllowedEntityAliases`<sup>Optional</sup> <a name="AllowedEntityAliases" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedEntityAliases"></a>

```go
AllowedEntityAliases *[]*string
```

- *Type:* *[]*string

Set of allowed entity aliases for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#allowed_entity_aliases TokenAuthBackendRole#allowed_entity_aliases}

---

##### `AllowedPolicies`<sup>Optional</sup> <a name="AllowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPolicies"></a>

```go
AllowedPolicies *[]*string
```

- *Type:* *[]*string

List of allowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#allowed_policies TokenAuthBackendRole#allowed_policies}

---

##### `AllowedPoliciesGlob`<sup>Optional</sup> <a name="AllowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.allowedPoliciesGlob"></a>

```go
AllowedPoliciesGlob *[]*string
```

- *Type:* *[]*string

Set of allowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#allowed_policies_glob TokenAuthBackendRole#allowed_policies_glob}

---

##### `DisallowedPolicies`<sup>Optional</sup> <a name="DisallowedPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPolicies"></a>

```go
DisallowedPolicies *[]*string
```

- *Type:* *[]*string

List of disallowed policies for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#disallowed_policies TokenAuthBackendRole#disallowed_policies}

---

##### `DisallowedPoliciesGlob`<sup>Optional</sup> <a name="DisallowedPoliciesGlob" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.disallowedPoliciesGlob"></a>

```go
DisallowedPoliciesGlob *[]*string
```

- *Type:* *[]*string

Set of disallowed policies with glob match for given role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#disallowed_policies_glob TokenAuthBackendRole#disallowed_policies_glob}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#id TokenAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#namespace TokenAuthBackendRole#namespace}

---

##### `Orphan`<sup>Optional</sup> <a name="Orphan" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.orphan"></a>

```go
Orphan interface{}
```

- *Type:* interface{}

If true, tokens created against this policy will be orphan tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#orphan TokenAuthBackendRole#orphan}

---

##### `PathSuffix`<sup>Optional</sup> <a name="PathSuffix" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.pathSuffix"></a>

```go
PathSuffix *string
```

- *Type:* *string

Tokens created against this role will have the given suffix as part of their path in addition to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#path_suffix TokenAuthBackendRole#path_suffix}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.renewable"></a>

```go
Renewable interface{}
```

- *Type:* interface{}

Whether to disable the ability of the token to be renewed past its initial TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#renewable TokenAuthBackendRole#renewable}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_bound_cidrs TokenAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_explicit_max_ttl TokenAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_max_ttl TokenAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_no_default_policy TokenAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_num_uses TokenAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_period TokenAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_policies TokenAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_ttl TokenAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.tokenAuthBackendRole.TokenAuthBackendRoleConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/token_auth_backend_role#token_type TokenAuthBackendRole#token_type}

---



