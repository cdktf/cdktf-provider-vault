# `pkiSecretBackendConfigAcme` Submodule <a name="`pkiSecretBackendConfigAcme` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAcme <a name="PkiSecretBackendConfigAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

pkisecretbackendconfigacme.NewPkiSecretBackendConfigAcme(scope Construct, id *string, config PkiSecretBackendConfigAcmeConfig) PkiSecretBackendConfigAcme
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers">ResetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage">ResetAllowRoleExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy">ResetDefaultDirectoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver">ResetDnsResolver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy">ResetEabPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedIssuers` <a name="ResetAllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers"></a>

```go
func ResetAllowedIssuers()
```

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles"></a>

```go
func ResetAllowedRoles()
```

##### `ResetAllowRoleExtKeyUsage` <a name="ResetAllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage"></a>

```go
func ResetAllowRoleExtKeyUsage()
```

##### `ResetDefaultDirectoryPolicy` <a name="ResetDefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy"></a>

```go
func ResetDefaultDirectoryPolicy()
```

##### `ResetDnsResolver` <a name="ResetDnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver"></a>

```go
func ResetDnsResolver()
```

##### `ResetEabPolicy` <a name="ResetEabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy"></a>

```go
func ResetEabPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

pkisecretbackendconfigacme.PkiSecretBackendConfigAcme_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

pkisecretbackendconfigacme.PkiSecretBackendConfigAcme_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

pkisecretbackendconfigacme.PkiSecretBackendConfigAcme_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

pkisecretbackendconfigacme.PkiSecretBackendConfigAcme_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendConfigAcme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendConfigAcme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAcme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput">AllowedIssuersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput">AllowRoleExtKeyUsageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput">DefaultDirectoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput">DnsResolverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput">EabPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers">AllowedIssuers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage">AllowRoleExtKeyUsage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy">DefaultDirectoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver">DnsResolver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy">EabPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedIssuersInput`<sup>Optional</sup> <a name="AllowedIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput"></a>

```go
func AllowedIssuersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput"></a>

```go
func AllowedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowRoleExtKeyUsageInput`<sup>Optional</sup> <a name="AllowRoleExtKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput"></a>

```go
func AllowRoleExtKeyUsageInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DefaultDirectoryPolicyInput`<sup>Optional</sup> <a name="DefaultDirectoryPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput"></a>

```go
func DefaultDirectoryPolicyInput() *string
```

- *Type:* *string

---

##### `DnsResolverInput`<sup>Optional</sup> <a name="DnsResolverInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput"></a>

```go
func DnsResolverInput() *string
```

- *Type:* *string

---

##### `EabPolicyInput`<sup>Optional</sup> <a name="EabPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput"></a>

```go
func EabPolicyInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AllowedIssuers`<sup>Required</sup> <a name="AllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers"></a>

```go
func AllowedIssuers() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles"></a>

```go
func AllowedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `AllowRoleExtKeyUsage`<sup>Required</sup> <a name="AllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage"></a>

```go
func AllowRoleExtKeyUsage() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DefaultDirectoryPolicy`<sup>Required</sup> <a name="DefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy"></a>

```go
func DefaultDirectoryPolicy() *string
```

- *Type:* *string

---

##### `DnsResolver`<sup>Required</sup> <a name="DnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver"></a>

```go
func DnsResolver() *string
```

- *Type:* *string

---

##### `EabPolicy`<sup>Required</sup> <a name="EabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy"></a>

```go
func EabPolicy() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAcmeConfig <a name="PkiSecretBackendConfigAcmeConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/pkisecretbackendconfigacme"

&pkisecretbackendconfigacme.PkiSecretBackendConfigAcmeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Enabled: interface{},
	AllowedIssuers: *[]*string,
	AllowedRoles: *[]*string,
	AllowRoleExtKeyUsage: interface{},
	DefaultDirectoryPolicy: *string,
	DnsResolver: *string,
	EabPolicy: *string,
	Id: *string,
	MaxTtl: *f64,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend">Backend</a></code> | <code>*string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether ACME is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers">AllowedIssuers</a></code> | <code>*[]*string</code> | Specifies which issuers are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles">AllowedRoles</a></code> | <code>*[]*string</code> | Specifies which roles are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage">AllowRoleExtKeyUsage</a></code> | <code>interface{}</code> | Specifies whether the ExtKeyUsage field from a role is used. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy">DefaultDirectoryPolicy</a></code> | <code>*string</code> | Specifies the policy to be used for non-role-qualified ACME requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver">DnsResolver</a></code> | <code>*string</code> | DNS resolver to use for domain resolution on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy">EabPolicy</a></code> | <code>*string</code> | Specifies the policy to use for external account binding behaviour. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum TTL in seconds for certificates issued by ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether ACME is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}

---

##### `AllowedIssuers`<sup>Optional</sup> <a name="AllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers"></a>

```go
AllowedIssuers *[]*string
```

- *Type:* *[]*string

Specifies which issuers are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles"></a>

```go
AllowedRoles *[]*string
```

- *Type:* *[]*string

Specifies which roles are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}

---

##### `AllowRoleExtKeyUsage`<sup>Optional</sup> <a name="AllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage"></a>

```go
AllowRoleExtKeyUsage interface{}
```

- *Type:* interface{}

Specifies whether the ExtKeyUsage field from a role is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}

---

##### `DefaultDirectoryPolicy`<sup>Optional</sup> <a name="DefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy"></a>

```go
DefaultDirectoryPolicy *string
```

- *Type:* *string

Specifies the policy to be used for non-role-qualified ACME requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}

---

##### `DnsResolver`<sup>Optional</sup> <a name="DnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver"></a>

```go
DnsResolver *string
```

- *Type:* *string

DNS resolver to use for domain resolution on this mount.

Must be in the format <host>:<port>, with both parts mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}

---

##### `EabPolicy`<sup>Optional</sup> <a name="EabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy"></a>

```go
EabPolicy *string
```

- *Type:* *string

Specifies the policy to use for external account binding behaviour.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum TTL in seconds for certificates issued by ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}

---



