# `pkiSecretBackendCrlConfig` Submodule <a name="`pkiSecretBackendCrlConfig` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCrlConfig <a name="PkiSecretBackendCrlConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

pkisecretbackendcrlconfig.NewPkiSecretBackendCrlConfig(scope Construct, id *string, config PkiSecretBackendCrlConfigConfig) PkiSecretBackendCrlConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild">ResetAutoRebuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod">ResetAutoRebuildGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation">ResetCrossClusterRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval">ResetDeltaRebuildInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta">ResetEnableDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry">ResetExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable">ResetOcspDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry">ResetOcspExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl">ResetUnifiedCrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths">ResetUnifiedCrlOnExistingPaths</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAutoRebuild` <a name="ResetAutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild"></a>

```go
func ResetAutoRebuild()
```

##### `ResetAutoRebuildGracePeriod` <a name="ResetAutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod"></a>

```go
func ResetAutoRebuildGracePeriod()
```

##### `ResetCrossClusterRevocation` <a name="ResetCrossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation"></a>

```go
func ResetCrossClusterRevocation()
```

##### `ResetDeltaRebuildInterval` <a name="ResetDeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval"></a>

```go
func ResetDeltaRebuildInterval()
```

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable"></a>

```go
func ResetDisable()
```

##### `ResetEnableDelta` <a name="ResetEnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta"></a>

```go
func ResetEnableDelta()
```

##### `ResetExpiry` <a name="ResetExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry"></a>

```go
func ResetExpiry()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOcspDisable` <a name="ResetOcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable"></a>

```go
func ResetOcspDisable()
```

##### `ResetOcspExpiry` <a name="ResetOcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry"></a>

```go
func ResetOcspExpiry()
```

##### `ResetUnifiedCrl` <a name="ResetUnifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl"></a>

```go
func ResetUnifiedCrl()
```

##### `ResetUnifiedCrlOnExistingPaths` <a name="ResetUnifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths"></a>

```go
func ResetUnifiedCrlOnExistingPaths()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

pkisecretbackendcrlconfig.PkiSecretBackendCrlConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

pkisecretbackendcrlconfig.PkiSecretBackendCrlConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

pkisecretbackendcrlconfig.PkiSecretBackendCrlConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

pkisecretbackendcrlconfig.PkiSecretBackendCrlConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendCrlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendCrlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCrlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput">AutoRebuildGracePeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput">AutoRebuildInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput">CrossClusterRevocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput">DeltaRebuildIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput">DisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput">EnableDeltaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput">ExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput">OcspDisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput">OcspExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput">UnifiedCrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput">UnifiedCrlOnExistingPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild">AutoRebuild</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod">AutoRebuildGracePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation">CrossClusterRevocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval">DeltaRebuildInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable">Disable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta">EnableDelta</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable">OcspDisable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry">OcspExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl">UnifiedCrl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths">UnifiedCrlOnExistingPaths</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoRebuildGracePeriodInput`<sup>Optional</sup> <a name="AutoRebuildGracePeriodInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput"></a>

```go
func AutoRebuildGracePeriodInput() *string
```

- *Type:* *string

---

##### `AutoRebuildInput`<sup>Optional</sup> <a name="AutoRebuildInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput"></a>

```go
func AutoRebuildInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CrossClusterRevocationInput`<sup>Optional</sup> <a name="CrossClusterRevocationInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput"></a>

```go
func CrossClusterRevocationInput() interface{}
```

- *Type:* interface{}

---

##### `DeltaRebuildIntervalInput`<sup>Optional</sup> <a name="DeltaRebuildIntervalInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput"></a>

```go
func DeltaRebuildIntervalInput() *string
```

- *Type:* *string

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput"></a>

```go
func DisableInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDeltaInput`<sup>Optional</sup> <a name="EnableDeltaInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput"></a>

```go
func EnableDeltaInput() interface{}
```

- *Type:* interface{}

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput"></a>

```go
func ExpiryInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OcspDisableInput`<sup>Optional</sup> <a name="OcspDisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput"></a>

```go
func OcspDisableInput() interface{}
```

- *Type:* interface{}

---

##### `OcspExpiryInput`<sup>Optional</sup> <a name="OcspExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput"></a>

```go
func OcspExpiryInput() *string
```

- *Type:* *string

---

##### `UnifiedCrlInput`<sup>Optional</sup> <a name="UnifiedCrlInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput"></a>

```go
func UnifiedCrlInput() interface{}
```

- *Type:* interface{}

---

##### `UnifiedCrlOnExistingPathsInput`<sup>Optional</sup> <a name="UnifiedCrlOnExistingPathsInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput"></a>

```go
func UnifiedCrlOnExistingPathsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRebuild`<sup>Required</sup> <a name="AutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild"></a>

```go
func AutoRebuild() interface{}
```

- *Type:* interface{}

---

##### `AutoRebuildGracePeriod`<sup>Required</sup> <a name="AutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod"></a>

```go
func AutoRebuildGracePeriod() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CrossClusterRevocation`<sup>Required</sup> <a name="CrossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation"></a>

```go
func CrossClusterRevocation() interface{}
```

- *Type:* interface{}

---

##### `DeltaRebuildInterval`<sup>Required</sup> <a name="DeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval"></a>

```go
func DeltaRebuildInterval() *string
```

- *Type:* *string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable"></a>

```go
func Disable() interface{}
```

- *Type:* interface{}

---

##### `EnableDelta`<sup>Required</sup> <a name="EnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta"></a>

```go
func EnableDelta() interface{}
```

- *Type:* interface{}

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OcspDisable`<sup>Required</sup> <a name="OcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable"></a>

```go
func OcspDisable() interface{}
```

- *Type:* interface{}

---

##### `OcspExpiry`<sup>Required</sup> <a name="OcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry"></a>

```go
func OcspExpiry() *string
```

- *Type:* *string

---

##### `UnifiedCrl`<sup>Required</sup> <a name="UnifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl"></a>

```go
func UnifiedCrl() interface{}
```

- *Type:* interface{}

---

##### `UnifiedCrlOnExistingPaths`<sup>Required</sup> <a name="UnifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths"></a>

```go
func UnifiedCrlOnExistingPaths() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCrlConfigConfig <a name="PkiSecretBackendCrlConfigConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v11/pkisecretbackendcrlconfig"

&pkisecretbackendcrlconfig.PkiSecretBackendCrlConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	AutoRebuild: interface{},
	AutoRebuildGracePeriod: *string,
	CrossClusterRevocation: interface{},
	DeltaRebuildInterval: *string,
	Disable: interface{},
	EnableDelta: interface{},
	Expiry: *string,
	Id: *string,
	Namespace: *string,
	OcspDisable: interface{},
	OcspExpiry: *string,
	UnifiedCrl: interface{},
	UnifiedCrlOnExistingPaths: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild">AutoRebuild</a></code> | <code>interface{}</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod">AutoRebuildGracePeriod</a></code> | <code>*string</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation">CrossClusterRevocation</a></code> | <code>interface{}</code> | Enable cross-cluster revocation request queues. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval">DeltaRebuildInterval</a></code> | <code>*string</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable">Disable</a></code> | <code>interface{}</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta">EnableDelta</a></code> | <code>interface{}</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry">Expiry</a></code> | <code>*string</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable">OcspDisable</a></code> | <code>interface{}</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry">OcspExpiry</a></code> | <code>*string</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl">UnifiedCrl</a></code> | <code>interface{}</code> | Enables unified CRL and OCSP building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths">UnifiedCrlOnExistingPaths</a></code> | <code>interface{}</code> | Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `AutoRebuild`<sup>Optional</sup> <a name="AutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild"></a>

```go
AutoRebuild interface{}
```

- *Type:* interface{}

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `AutoRebuildGracePeriod`<sup>Optional</sup> <a name="AutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod"></a>

```go
AutoRebuildGracePeriod *string
```

- *Type:* *string

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `CrossClusterRevocation`<sup>Optional</sup> <a name="CrossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation"></a>

```go
CrossClusterRevocation interface{}
```

- *Type:* interface{}

Enable cross-cluster revocation request queues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#cross_cluster_revocation PkiSecretBackendCrlConfig#cross_cluster_revocation}

---

##### `DeltaRebuildInterval`<sup>Optional</sup> <a name="DeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval"></a>

```go
DeltaRebuildInterval *string
```

- *Type:* *string

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable"></a>

```go
Disable interface{}
```

- *Type:* interface{}

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `EnableDelta`<sup>Optional</sup> <a name="EnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta"></a>

```go
EnableDelta interface{}
```

- *Type:* interface{}

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `Expiry`<sup>Optional</sup> <a name="Expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry"></a>

```go
Expiry *string
```

- *Type:* *string

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `OcspDisable`<sup>Optional</sup> <a name="OcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable"></a>

```go
OcspDisable interface{}
```

- *Type:* interface{}

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `OcspExpiry`<sup>Optional</sup> <a name="OcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry"></a>

```go
OcspExpiry *string
```

- *Type:* *string

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---

##### `UnifiedCrl`<sup>Optional</sup> <a name="UnifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl"></a>

```go
UnifiedCrl interface{}
```

- *Type:* interface{}

Enables unified CRL and OCSP building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#unified_crl PkiSecretBackendCrlConfig#unified_crl}

---

##### `UnifiedCrlOnExistingPaths`<sup>Optional</sup> <a name="UnifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths"></a>

```go
UnifiedCrlOnExistingPaths interface{}
```

- *Type:* interface{}

Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_crl_config#unified_crl_on_existing_paths PkiSecretBackendCrlConfig#unified_crl_on_existing_paths}

---



