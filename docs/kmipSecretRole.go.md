# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktf/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

kmipsecretrole.NewKmipSecretRole(scope Construct, id *string, config KmipSecretRoleConfig) KmipSecretRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">ResetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">ResetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">ResetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">ResetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">ResetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">ResetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">ResetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">ResetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">ResetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">ResetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">ResetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">ResetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">ResetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">ResetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">ResetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">ResetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">ResetTlsClientTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOperationActivate` <a name="ResetOperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```go
func ResetOperationActivate()
```

##### `ResetOperationAddAttribute` <a name="ResetOperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```go
func ResetOperationAddAttribute()
```

##### `ResetOperationAll` <a name="ResetOperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```go
func ResetOperationAll()
```

##### `ResetOperationCreate` <a name="ResetOperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```go
func ResetOperationCreate()
```

##### `ResetOperationDestroy` <a name="ResetOperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```go
func ResetOperationDestroy()
```

##### `ResetOperationDiscoverVersions` <a name="ResetOperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```go
func ResetOperationDiscoverVersions()
```

##### `ResetOperationGet` <a name="ResetOperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```go
func ResetOperationGet()
```

##### `ResetOperationGetAttributeList` <a name="ResetOperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```go
func ResetOperationGetAttributeList()
```

##### `ResetOperationGetAttributes` <a name="ResetOperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```go
func ResetOperationGetAttributes()
```

##### `ResetOperationLocate` <a name="ResetOperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```go
func ResetOperationLocate()
```

##### `ResetOperationNone` <a name="ResetOperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```go
func ResetOperationNone()
```

##### `ResetOperationRegister` <a name="ResetOperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```go
func ResetOperationRegister()
```

##### `ResetOperationRekey` <a name="ResetOperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```go
func ResetOperationRekey()
```

##### `ResetOperationRevoke` <a name="ResetOperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```go
func ResetOperationRevoke()
```

##### `ResetTlsClientKeyBits` <a name="ResetTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```go
func ResetTlsClientKeyBits()
```

##### `ResetTlsClientKeyType` <a name="ResetTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```go
func ResetTlsClientKeyType()
```

##### `ResetTlsClientTtl` <a name="ResetTlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```go
func ResetTlsClientTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

kmipsecretrole.KmipSecretRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

kmipsecretrole.KmipSecretRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

kmipsecretrole.KmipSecretRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

kmipsecretrole.KmipSecretRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmipSecretRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmipSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmipSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">OperationActivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">OperationAddAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">OperationAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">OperationCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">OperationDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">OperationDiscoverVersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">OperationGetAttributeListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">OperationGetAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">OperationGetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">OperationLocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">OperationNoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">OperationRegisterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">OperationRekeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">OperationRevokeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">TlsClientKeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">TlsClientKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">TlsClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">OperationActivate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">OperationAddAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">OperationAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">OperationCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">OperationDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">OperationDiscoverVersions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">OperationGet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">OperationGetAttributeList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">OperationGetAttributes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">OperationLocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">OperationNone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">OperationRegister</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">OperationRekey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">OperationRevoke</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">TlsClientKeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">TlsClientKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">TlsClientTtl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OperationActivateInput`<sup>Optional</sup> <a name="OperationActivateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```go
func OperationActivateInput() interface{}
```

- *Type:* interface{}

---

##### `OperationAddAttributeInput`<sup>Optional</sup> <a name="OperationAddAttributeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```go
func OperationAddAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `OperationAllInput`<sup>Optional</sup> <a name="OperationAllInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```go
func OperationAllInput() interface{}
```

- *Type:* interface{}

---

##### `OperationCreateInput`<sup>Optional</sup> <a name="OperationCreateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```go
func OperationCreateInput() interface{}
```

- *Type:* interface{}

---

##### `OperationDestroyInput`<sup>Optional</sup> <a name="OperationDestroyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```go
func OperationDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `OperationDiscoverVersionsInput`<sup>Optional</sup> <a name="OperationDiscoverVersionsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```go
func OperationDiscoverVersionsInput() interface{}
```

- *Type:* interface{}

---

##### `OperationGetAttributeListInput`<sup>Optional</sup> <a name="OperationGetAttributeListInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```go
func OperationGetAttributeListInput() interface{}
```

- *Type:* interface{}

---

##### `OperationGetAttributesInput`<sup>Optional</sup> <a name="OperationGetAttributesInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```go
func OperationGetAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `OperationGetInput`<sup>Optional</sup> <a name="OperationGetInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```go
func OperationGetInput() interface{}
```

- *Type:* interface{}

---

##### `OperationLocateInput`<sup>Optional</sup> <a name="OperationLocateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```go
func OperationLocateInput() interface{}
```

- *Type:* interface{}

---

##### `OperationNoneInput`<sup>Optional</sup> <a name="OperationNoneInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```go
func OperationNoneInput() interface{}
```

- *Type:* interface{}

---

##### `OperationRegisterInput`<sup>Optional</sup> <a name="OperationRegisterInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```go
func OperationRegisterInput() interface{}
```

- *Type:* interface{}

---

##### `OperationRekeyInput`<sup>Optional</sup> <a name="OperationRekeyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```go
func OperationRekeyInput() interface{}
```

- *Type:* interface{}

---

##### `OperationRevokeInput`<sup>Optional</sup> <a name="OperationRevokeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```go
func OperationRevokeInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TlsClientKeyBitsInput`<sup>Optional</sup> <a name="TlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```go
func TlsClientKeyBitsInput() *f64
```

- *Type:* *f64

---

##### `TlsClientKeyTypeInput`<sup>Optional</sup> <a name="TlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```go
func TlsClientKeyTypeInput() *string
```

- *Type:* *string

---

##### `TlsClientTtlInput`<sup>Optional</sup> <a name="TlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```go
func TlsClientTtlInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OperationActivate`<sup>Required</sup> <a name="OperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```go
func OperationActivate() interface{}
```

- *Type:* interface{}

---

##### `OperationAddAttribute`<sup>Required</sup> <a name="OperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```go
func OperationAddAttribute() interface{}
```

- *Type:* interface{}

---

##### `OperationAll`<sup>Required</sup> <a name="OperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```go
func OperationAll() interface{}
```

- *Type:* interface{}

---

##### `OperationCreate`<sup>Required</sup> <a name="OperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```go
func OperationCreate() interface{}
```

- *Type:* interface{}

---

##### `OperationDestroy`<sup>Required</sup> <a name="OperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```go
func OperationDestroy() interface{}
```

- *Type:* interface{}

---

##### `OperationDiscoverVersions`<sup>Required</sup> <a name="OperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```go
func OperationDiscoverVersions() interface{}
```

- *Type:* interface{}

---

##### `OperationGet`<sup>Required</sup> <a name="OperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```go
func OperationGet() interface{}
```

- *Type:* interface{}

---

##### `OperationGetAttributeList`<sup>Required</sup> <a name="OperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```go
func OperationGetAttributeList() interface{}
```

- *Type:* interface{}

---

##### `OperationGetAttributes`<sup>Required</sup> <a name="OperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```go
func OperationGetAttributes() interface{}
```

- *Type:* interface{}

---

##### `OperationLocate`<sup>Required</sup> <a name="OperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```go
func OperationLocate() interface{}
```

- *Type:* interface{}

---

##### `OperationNone`<sup>Required</sup> <a name="OperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```go
func OperationNone() interface{}
```

- *Type:* interface{}

---

##### `OperationRegister`<sup>Required</sup> <a name="OperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```go
func OperationRegister() interface{}
```

- *Type:* interface{}

---

##### `OperationRekey`<sup>Required</sup> <a name="OperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```go
func OperationRekey() interface{}
```

- *Type:* interface{}

---

##### `OperationRevoke`<sup>Required</sup> <a name="OperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```go
func OperationRevoke() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TlsClientKeyBits`<sup>Required</sup> <a name="TlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```go
func TlsClientKeyBits() *f64
```

- *Type:* *f64

---

##### `TlsClientKeyType`<sup>Required</sup> <a name="TlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```go
func TlsClientKeyType() *string
```

- *Type:* *string

---

##### `TlsClientTtl`<sup>Required</sup> <a name="TlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```go
func TlsClientTtl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/kmipsecretrole"

&kmipsecretrole.KmipSecretRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	Role: *string,
	Scope: *string,
	Id: *string,
	Namespace: *string,
	OperationActivate: interface{},
	OperationAddAttribute: interface{},
	OperationAll: interface{},
	OperationCreate: interface{},
	OperationDestroy: interface{},
	OperationDiscoverVersions: interface{},
	OperationGet: interface{},
	OperationGetAttributeList: interface{},
	OperationGetAttributes: interface{},
	OperationLocate: interface{},
	OperationNone: interface{},
	OperationRegister: interface{},
	OperationRekey: interface{},
	OperationRevoke: interface{},
	TlsClientKeyBits: *f64,
	TlsClientKeyType: *string,
	TlsClientTtl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">Path</a></code> | <code>*string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">Role</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">Scope</a></code> | <code>*string</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">OperationActivate</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">OperationAddAttribute</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">OperationAll</a></code> | <code>interface{}</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">OperationCreate</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">OperationDestroy</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">OperationDiscoverVersions</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">OperationGet</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">OperationGetAttributeList</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">OperationGetAttributes</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">OperationLocate</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">OperationNone</a></code> | <code>interface{}</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">OperationRegister</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">OperationRekey</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">OperationRevoke</a></code> | <code>interface{}</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">TlsClientKeyBits</a></code> | <code>*f64</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">TlsClientKeyType</a></code> | <code>*string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">TlsClientTtl</a></code> | <code>*f64</code> | Client certificate TTL in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `OperationActivate`<sup>Optional</sup> <a name="OperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```go
OperationActivate interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `OperationAddAttribute`<sup>Optional</sup> <a name="OperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```go
OperationAddAttribute interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `OperationAll`<sup>Optional</sup> <a name="OperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```go
OperationAll interface{}
```

- *Type:* interface{}

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `OperationCreate`<sup>Optional</sup> <a name="OperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```go
OperationCreate interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `OperationDestroy`<sup>Optional</sup> <a name="OperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```go
OperationDestroy interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `OperationDiscoverVersions`<sup>Optional</sup> <a name="OperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```go
OperationDiscoverVersions interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `OperationGet`<sup>Optional</sup> <a name="OperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```go
OperationGet interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `OperationGetAttributeList`<sup>Optional</sup> <a name="OperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```go
OperationGetAttributeList interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `OperationGetAttributes`<sup>Optional</sup> <a name="OperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```go
OperationGetAttributes interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `OperationLocate`<sup>Optional</sup> <a name="OperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```go
OperationLocate interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `OperationNone`<sup>Optional</sup> <a name="OperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```go
OperationNone interface{}
```

- *Type:* interface{}

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `OperationRegister`<sup>Optional</sup> <a name="OperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```go
OperationRegister interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `OperationRekey`<sup>Optional</sup> <a name="OperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```go
OperationRekey interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `OperationRevoke`<sup>Optional</sup> <a name="OperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```go
OperationRevoke interface{}
```

- *Type:* interface{}

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `TlsClientKeyBits`<sup>Optional</sup> <a name="TlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```go
TlsClientKeyBits *f64
```

- *Type:* *f64

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `TlsClientKeyType`<sup>Optional</sup> <a name="TlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```go
TlsClientKeyType *string
```

- *Type:* *string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `TlsClientTtl`<sup>Optional</sup> <a name="TlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```go
TlsClientTtl *f64
```

- *Type:* *f64

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



