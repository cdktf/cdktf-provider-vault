# `ldapSecretBackendDynamicRole` Submodule <a name="`ldapSecretBackendDynamicRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendDynamicRole <a name="LdapSecretBackendDynamicRole" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

ldapsecretbackenddynamicrole.NewLdapSecretBackendDynamicRole(scope Construct, id *string, config LdapSecretBackendDynamicRoleConfig) LdapSecretBackendDynamicRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif">ResetRollbackLdif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetMount` <a name="ResetMount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount"></a>

```go
func ResetMount()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRollbackLdif` <a name="ResetRollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif"></a>

```go
func ResetRollbackLdif()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

ldapsecretbackenddynamicrole.LdapSecretBackendDynamicRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

ldapsecretbackenddynamicrole.LdapSecretBackendDynamicRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

ldapsecretbackenddynamicrole.LdapSecretBackendDynamicRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

ldapsecretbackenddynamicrole.LdapSecretBackendDynamicRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LdapSecretBackendDynamicRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LdapSecretBackendDynamicRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput">CreationLdifInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput">DeletionLdifInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput">RollbackLdifInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif">CreationLdif</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif">DeletionLdif</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif">RollbackLdif</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationLdifInput`<sup>Optional</sup> <a name="CreationLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput"></a>

```go
func CreationLdifInput() *string
```

- *Type:* *string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `DeletionLdifInput`<sup>Optional</sup> <a name="DeletionLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput"></a>

```go
func DeletionLdifInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `RollbackLdifInput`<sup>Optional</sup> <a name="RollbackLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput"></a>

```go
func RollbackLdifInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `CreationLdif`<sup>Required</sup> <a name="CreationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif"></a>

```go
func CreationLdif() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `DeletionLdif`<sup>Required</sup> <a name="DeletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif"></a>

```go
func DeletionLdif() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `RollbackLdif`<sup>Required</sup> <a name="RollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif"></a>

```go
func RollbackLdif() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendDynamicRoleConfig <a name="LdapSecretBackendDynamicRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/ldapsecretbackenddynamicrole"

&ldapsecretbackenddynamicrole.LdapSecretBackendDynamicRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CreationLdif: *string,
	DeletionLdif: *string,
	RoleName: *string,
	DefaultTtl: *f64,
	Id: *string,
	MaxTtl: *f64,
	Mount: *string,
	Namespace: *string,
	RollbackLdif: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif">CreationLdif</a></code> | <code>*string</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif">DeletionLdif</a></code> | <code>*string</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif">RollbackLdif</a></code> | <code>*string</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | A template used to generate a dynamic username. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationLdif`<sup>Required</sup> <a name="CreationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif"></a>

```go
CreationLdif *string
```

- *Type:* *string

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `DeletionLdif`<sup>Required</sup> <a name="DeletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif"></a>

```go
DeletionLdif *string
```

- *Type:* *string

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `RollbackLdif`<sup>Optional</sup> <a name="RollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif"></a>

```go
RollbackLdif *string
```

- *Type:* *string

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---



