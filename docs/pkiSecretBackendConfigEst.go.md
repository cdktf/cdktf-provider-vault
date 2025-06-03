# `pkiSecretBackendConfigEst` Submodule <a name="`pkiSecretBackendConfigEst` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigEst"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigEst <a name="PkiSecretBackendConfigEst" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.NewPkiSecretBackendConfigEst(scope Construct, id *string, config PkiSecretBackendConfigEstConfig) PkiSecretBackendConfigEst
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators">PutAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields">ResetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators">ResetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount">ResetDefaultMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy">ResetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing">ResetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy">ResetLabelToPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticators` <a name="PutAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators"></a>

```go
func PutAuthenticators(value PkiSecretBackendConfigEstAuthenticators)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `ResetAuditFields` <a name="ResetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields"></a>

```go
func ResetAuditFields()
```

##### `ResetAuthenticators` <a name="ResetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators"></a>

```go
func ResetAuthenticators()
```

##### `ResetDefaultMount` <a name="ResetDefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount"></a>

```go
func ResetDefaultMount()
```

##### `ResetDefaultPathPolicy` <a name="ResetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy"></a>

```go
func ResetDefaultPathPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnableSentinelParsing` <a name="ResetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing"></a>

```go
func ResetEnableSentinelParsing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId"></a>

```go
func ResetId()
```

##### `ResetLabelToPathPolicy` <a name="ResetLabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy"></a>

```go
func ResetLabelToPathPolicy()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.PkiSecretBackendConfigEst_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.PkiSecretBackendConfigEst_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.PkiSecretBackendConfigEst_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.PkiSecretBackendConfigEst_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendConfigEst to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendConfigEst that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigEst to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput">AuditFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput">AuthenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput">DefaultMountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput">DefaultPathPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput">EnableSentinelParsingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput">LabelToPathPolicyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields">AuditFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount">DefaultMount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy">LabelToPathPolicy</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authenticators`<sup>Required</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators"></a>

```go
func Authenticators() PkiSecretBackendConfigEstAuthenticatorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a>

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `AuditFieldsInput`<sup>Optional</sup> <a name="AuditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput"></a>

```go
func AuditFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticatorsInput`<sup>Optional</sup> <a name="AuthenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput"></a>

```go
func AuthenticatorsInput() PkiSecretBackendConfigEstAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DefaultMountInput`<sup>Optional</sup> <a name="DefaultMountInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput"></a>

```go
func DefaultMountInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultPathPolicyInput`<sup>Optional</sup> <a name="DefaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput"></a>

```go
func DefaultPathPolicyInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSentinelParsingInput`<sup>Optional</sup> <a name="EnableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput"></a>

```go
func EnableSentinelParsingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelToPathPolicyInput`<sup>Optional</sup> <a name="LabelToPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput"></a>

```go
func LabelToPathPolicyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AuditFields`<sup>Required</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields"></a>

```go
func AuditFields() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DefaultMount`<sup>Required</sup> <a name="DefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount"></a>

```go
func DefaultMount() interface{}
```

- *Type:* interface{}

---

##### `DefaultPathPolicy`<sup>Required</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy"></a>

```go
func DefaultPathPolicy() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnableSentinelParsing`<sup>Required</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing"></a>

```go
func EnableSentinelParsing() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LabelToPathPolicy`<sup>Required</sup> <a name="LabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy"></a>

```go
func LabelToPathPolicy() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigEstAuthenticators <a name="PkiSecretBackendConfigEstAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

&pkisecretbackendconfigest.PkiSecretBackendConfigEstAuthenticators {
	Cert: *map[string]*string,
	Userpass: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert">Cert</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass">Userpass</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}. |

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert"></a>

```go
Cert *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}.

---

##### `Userpass`<sup>Optional</sup> <a name="Userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass"></a>

```go
Userpass *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}.

---

### PkiSecretBackendConfigEstConfig <a name="PkiSecretBackendConfigEstConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

&pkisecretbackendconfigest.PkiSecretBackendConfigEstConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	AuditFields: *[]*string,
	Authenticators: github.com/cdktf/cdktf-provider-vault-go/vault/v15.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators,
	DefaultMount: interface{},
	DefaultPathPolicy: *string,
	Enabled: interface{},
	EnableSentinelParsing: interface{},
	Id: *string,
	LabelToPathPolicy: *map[string]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend">Backend</a></code> | <code>*string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields">AuditFields</a></code> | <code>*[]*string</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators">Authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount">DefaultMount</a></code> | <code>interface{}</code> | If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy">DefaultPathPolicy</a></code> | <code>*string</code> | Required to be set if default_mount is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether EST is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing">EnableSentinelParsing</a></code> | <code>interface{}</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy">LabelToPathPolicy</a></code> | <code>*map[string]*string</code> | Configures a pairing of an EST label with the redirected behavior for requests hitting that role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}

---

##### `AuditFields`<sup>Optional</sup> <a name="AuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields"></a>

```go
AuditFields *[]*string
```

- *Type:* *[]*string

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}

---

##### `Authenticators`<sup>Optional</sup> <a name="Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators"></a>

```go
Authenticators PkiSecretBackendConfigEstAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}

---

##### `DefaultMount`<sup>Optional</sup> <a name="DefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount"></a>

```go
DefaultMount interface{}
```

- *Type:* interface{}

If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}

---

##### `DefaultPathPolicy`<sup>Optional</sup> <a name="DefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy"></a>

```go
DefaultPathPolicy *string
```

- *Type:* *string

Required to be set if default_mount is enabled.

Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether EST is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}

---

##### `EnableSentinelParsing`<sup>Optional</sup> <a name="EnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing"></a>

```go
EnableSentinelParsing interface{}
```

- *Type:* interface{}

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelToPathPolicy`<sup>Optional</sup> <a name="LabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy"></a>

```go
LabelToPathPolicy *map[string]*string
```

- *Type:* *map[string]*string

Configures a pairing of an EST label with the redirected behavior for requests hitting that role.

The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigEstAuthenticatorsOutputReference <a name="PkiSecretBackendConfigEstAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendconfigest"

pkisecretbackendconfigest.NewPkiSecretBackendConfigEstAuthenticatorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PkiSecretBackendConfigEstAuthenticatorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass">ResetUserpass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert"></a>

```go
func ResetCert()
```

##### `ResetUserpass` <a name="ResetUserpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass"></a>

```go
func ResetUserpass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput">CertInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput">UserpassInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert">Cert</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass">Userpass</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput"></a>

```go
func CertInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserpassInput`<sup>Optional</sup> <a name="UserpassInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput"></a>

```go
func UserpassInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert"></a>

```go
func Cert() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Userpass`<sup>Required</sup> <a name="Userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass"></a>

```go
func Userpass() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue"></a>

```go
func InternalValue() PkiSecretBackendConfigEstAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---



