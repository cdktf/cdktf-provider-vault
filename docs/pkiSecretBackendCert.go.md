# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

pkisecretbackendcert.NewPkiSecretBackendCert(scope Construct, id *string, config PkiSecretBackendCertConfig) PkiSecretBackendCert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">ResetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">ResetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">ResetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef">ResetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">ResetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">ResetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">ResetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">ResetRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">ResetUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAltNames` <a name="ResetAltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```go
func ResetAltNames()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```go
func ResetAutoRenew()
```

##### `ResetExcludeCnFromSans` <a name="ResetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```go
func ResetExcludeCnFromSans()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```go
func ResetId()
```

##### `ResetIpSans` <a name="ResetIpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```go
func ResetIpSans()
```

##### `ResetIssuerRef` <a name="ResetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef"></a>

```go
func ResetIssuerRef()
```

##### `ResetMinSecondsRemaining` <a name="ResetMinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```go
func ResetMinSecondsRemaining()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOtherSans` <a name="ResetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```go
func ResetOtherSans()
```

##### `ResetPrivateKeyFormat` <a name="ResetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```go
func ResetPrivateKeyFormat()
```

##### `ResetRevoke` <a name="ResetRevoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```go
func ResetRevoke()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetUriSans` <a name="ResetUriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```go
func ResetUriSans()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds"></a>

```go
func ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

pkisecretbackendcert.PkiSecretBackendCert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

pkisecretbackendcert.PkiSecretBackendCert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

pkisecretbackendcert.PkiSecretBackendCert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

pkisecretbackendcert.PkiSecretBackendCert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">CaChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">Expiration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">IssuingCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">RenewPending</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">AltNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">AutoRenewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">ExcludeCnFromSansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">IpSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput">IssuerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">MinSecondsRemainingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">OtherSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">PrivateKeyFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">RevokeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">UriSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput">UserIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">AltNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">Revoke</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds">UserIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```go
func CaChain() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```go
func Expiration() *f64
```

- *Type:* *f64

---

##### `IssuingCa`<sup>Required</sup> <a name="IssuingCa" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```go
func IssuingCa() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```go
func PrivateKeyType() *string
```

- *Type:* *string

---

##### `RenewPending`<sup>Required</sup> <a name="RenewPending" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```go
func RenewPending() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `AltNamesInput`<sup>Optional</sup> <a name="AltNamesInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```go
func AltNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```go
func AutoRenewInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSansInput`<sup>Optional</sup> <a name="ExcludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```go
func ExcludeCnFromSansInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpSansInput`<sup>Optional</sup> <a name="IpSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```go
func IpSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput"></a>

```go
func IssuerRefInput() *string
```

- *Type:* *string

---

##### `MinSecondsRemainingInput`<sup>Optional</sup> <a name="MinSecondsRemainingInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```go
func MinSecondsRemainingInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OtherSansInput`<sup>Optional</sup> <a name="OtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```go
func OtherSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKeyFormatInput`<sup>Optional</sup> <a name="PrivateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```go
func PrivateKeyFormatInput() *string
```

- *Type:* *string

---

##### `RevokeInput`<sup>Optional</sup> <a name="RevokeInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```go
func RevokeInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `UriSansInput`<sup>Optional</sup> <a name="UriSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```go
func UriSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput"></a>

```go
func UserIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AltNames`<sup>Required</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```go
func AltNames() *[]*string
```

- *Type:* *[]*string

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```go
func AutoRenew() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSans`<sup>Required</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```go
func ExcludeCnFromSans() interface{}
```

- *Type:* interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpSans`<sup>Required</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```go
func IpSans() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef"></a>

```go
func IssuerRef() *string
```

- *Type:* *string

---

##### `MinSecondsRemaining`<sup>Required</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```go
func MinSecondsRemaining() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OtherSans`<sup>Required</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```go
func OtherSans() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKeyFormat`<sup>Required</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```go
func PrivateKeyFormat() *string
```

- *Type:* *string

---

##### `Revoke`<sup>Required</sup> <a name="Revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```go
func Revoke() interface{}
```

- *Type:* interface{}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `UriSans`<sup>Required</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```go
func UriSans() *[]*string
```

- *Type:* *[]*string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds"></a>

```go
func UserIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendcert"

&pkisecretbackendcert.PkiSecretBackendCertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CommonName: *string,
	Name: *string,
	AltNames: *[]*string,
	AutoRenew: interface{},
	ExcludeCnFromSans: interface{},
	Format: *string,
	Id: *string,
	IpSans: *[]*string,
	IssuerRef: *string,
	MinSecondsRemaining: *f64,
	Namespace: *string,
	OtherSans: *[]*string,
	PrivateKeyFormat: *string,
	Revoke: interface{},
	Ttl: *string,
	UriSans: *[]*string,
	UserIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">Backend</a></code> | <code>*string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">CommonName</a></code> | <code>*string</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">Name</a></code> | <code>*string</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">AltNames</a></code> | <code>*[]*string</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">AutoRenew</a></code> | <code>interface{}</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">Format</a></code> | <code>*string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">MinSecondsRemaining</a></code> | <code>*f64</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>*string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">Revoke</a></code> | <code>interface{}</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds">UserIds</a></code> | <code>*[]*string</code> | List of Subject User IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `AltNames`<sup>Optional</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```go
AltNames *[]*string
```

- *Type:* *[]*string

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```go
AutoRenew interface{}
```

- *Type:* interface{}

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `ExcludeCnFromSans`<sup>Optional</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```go
ExcludeCnFromSans interface{}
```

- *Type:* interface{}

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSans`<sup>Optional</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```go
IpSans *[]*string
```

- *Type:* *[]*string

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `IssuerRef`<sup>Optional</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef"></a>

```go
IssuerRef *string
```

- *Type:* *string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `MinSecondsRemaining`<sup>Optional</sup> <a name="MinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```go
MinSecondsRemaining *f64
```

- *Type:* *f64

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `OtherSans`<sup>Optional</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```go
OtherSans *[]*string
```

- *Type:* *[]*string

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `PrivateKeyFormat`<sup>Optional</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```go
PrivateKeyFormat *string
```

- *Type:* *string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `Revoke`<sup>Optional</sup> <a name="Revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```go
Revoke interface{}
```

- *Type:* interface{}

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `UriSans`<sup>Optional</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```go
UriSans *[]*string
```

- *Type:* *[]*string

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds"></a>

```go
UserIds *[]*string
```

- *Type:* *[]*string

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.25.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---



