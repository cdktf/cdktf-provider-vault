# `pkiSecretBackendIssuer` Submodule <a name="`pkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIssuer <a name="PkiSecretBackendIssuer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

pkisecretbackendissuer.NewPkiSecretBackendIssuer(scope Construct, id *string, config PkiSecretBackendIssuerConfig) PkiSecretBackendIssuer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints">ResetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating">ResetEnableAiaUrlTemplating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName">ResetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates">ResetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior">ResetLeafNotAfterBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain">ResetManualChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers">ResetOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm">ResetRevocationSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage">ResetUsage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCrlDistributionPoints` <a name="ResetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints"></a>

```go
func ResetCrlDistributionPoints()
```

##### `ResetEnableAiaUrlTemplating` <a name="ResetEnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating"></a>

```go
func ResetEnableAiaUrlTemplating()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerName` <a name="ResetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName"></a>

```go
func ResetIssuerName()
```

##### `ResetIssuingCertificates` <a name="ResetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates"></a>

```go
func ResetIssuingCertificates()
```

##### `ResetLeafNotAfterBehavior` <a name="ResetLeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior"></a>

```go
func ResetLeafNotAfterBehavior()
```

##### `ResetManualChain` <a name="ResetManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain"></a>

```go
func ResetManualChain()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOcspServers` <a name="ResetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers"></a>

```go
func ResetOcspServers()
```

##### `ResetRevocationSignatureAlgorithm` <a name="ResetRevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm"></a>

```go
func ResetRevocationSignatureAlgorithm()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage"></a>

```go
func ResetUsage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

pkisecretbackendissuer.PkiSecretBackendIssuer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

pkisecretbackendissuer.PkiSecretBackendIssuer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

pkisecretbackendissuer.PkiSecretBackendIssuer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

pkisecretbackendissuer.PkiSecretBackendIssuer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId">IssuerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput">CrlDistributionPointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput">EnableAiaUrlTemplatingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput">IssuerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput">IssuerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput">IssuingCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput">LeafNotAfterBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput">ManualChainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput">OcspServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput">RevocationSignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput">UsageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating">EnableAiaUrlTemplating</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName">IssuerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates">IssuingCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain">ManualChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers">OcspServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm">RevocationSignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId"></a>

```go
func IssuerId() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CrlDistributionPointsInput`<sup>Optional</sup> <a name="CrlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput"></a>

```go
func CrlDistributionPointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableAiaUrlTemplatingInput`<sup>Optional</sup> <a name="EnableAiaUrlTemplatingInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput"></a>

```go
func EnableAiaUrlTemplatingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerNameInput`<sup>Optional</sup> <a name="IssuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput"></a>

```go
func IssuerNameInput() *string
```

- *Type:* *string

---

##### `IssuerRefInput`<sup>Optional</sup> <a name="IssuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput"></a>

```go
func IssuerRefInput() *string
```

- *Type:* *string

---

##### `IssuingCertificatesInput`<sup>Optional</sup> <a name="IssuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput"></a>

```go
func IssuingCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LeafNotAfterBehaviorInput`<sup>Optional</sup> <a name="LeafNotAfterBehaviorInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput"></a>

```go
func LeafNotAfterBehaviorInput() *string
```

- *Type:* *string

---

##### `ManualChainInput`<sup>Optional</sup> <a name="ManualChainInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput"></a>

```go
func ManualChainInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OcspServersInput`<sup>Optional</sup> <a name="OcspServersInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput"></a>

```go
func OcspServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RevocationSignatureAlgorithmInput`<sup>Optional</sup> <a name="RevocationSignatureAlgorithmInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput"></a>

```go
func RevocationSignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput"></a>

```go
func UsageInput() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CrlDistributionPoints`<sup>Required</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints"></a>

```go
func CrlDistributionPoints() *[]*string
```

- *Type:* *[]*string

---

##### `EnableAiaUrlTemplating`<sup>Required</sup> <a name="EnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating"></a>

```go
func EnableAiaUrlTemplating() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerName`<sup>Required</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName"></a>

```go
func IssuerName() *string
```

- *Type:* *string

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef"></a>

```go
func IssuerRef() *string
```

- *Type:* *string

---

##### `IssuingCertificates`<sup>Required</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates"></a>

```go
func IssuingCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `LeafNotAfterBehavior`<sup>Required</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```go
func LeafNotAfterBehavior() *string
```

- *Type:* *string

---

##### `ManualChain`<sup>Required</sup> <a name="ManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain"></a>

```go
func ManualChain() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OcspServers`<sup>Required</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers"></a>

```go
func OcspServers() *[]*string
```

- *Type:* *[]*string

---

##### `RevocationSignatureAlgorithm`<sup>Required</sup> <a name="RevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm"></a>

```go
func RevocationSignatureAlgorithm() *string
```

- *Type:* *string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIssuerConfig <a name="PkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/pkisecretbackendissuer"

&pkisecretbackendissuer.PkiSecretBackendIssuerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	IssuerRef: *string,
	CrlDistributionPoints: *[]*string,
	EnableAiaUrlTemplating: interface{},
	Id: *string,
	IssuerName: *string,
	IssuingCertificates: *[]*string,
	LeafNotAfterBehavior: *string,
	ManualChain: *[]*string,
	Namespace: *string,
	OcspServers: *[]*string,
	RevocationSignatureAlgorithm: *string,
	Usage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend">Backend</a></code> | <code>*string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef">IssuerRef</a></code> | <code>*string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>*[]*string</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating">EnableAiaUrlTemplating</a></code> | <code>interface{}</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName">IssuerName</a></code> | <code>*string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates">IssuingCertificates</a></code> | <code>*[]*string</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior">LeafNotAfterBehavior</a></code> | <code>*string</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain">ManualChain</a></code> | <code>*[]*string</code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers">OcspServers</a></code> | <code>*[]*string</code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm">RevocationSignatureAlgorithm</a></code> | <code>*string</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage">Usage</a></code> | <code>*string</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `IssuerRef`<sup>Required</sup> <a name="IssuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef"></a>

```go
IssuerRef *string
```

- *Type:* *string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `CrlDistributionPoints`<sup>Optional</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints"></a>

```go
CrlDistributionPoints *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `EnableAiaUrlTemplating`<sup>Optional</sup> <a name="EnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating"></a>

```go
EnableAiaUrlTemplating interface{}
```

- *Type:* interface{}

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerName`<sup>Optional</sup> <a name="IssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName"></a>

```go
IssuerName *string
```

- *Type:* *string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `IssuingCertificates`<sup>Optional</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates"></a>

```go
IssuingCertificates *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `LeafNotAfterBehavior`<sup>Optional</sup> <a name="LeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior"></a>

```go
LeafNotAfterBehavior *string
```

- *Type:* *string

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `ManualChain`<sup>Optional</sup> <a name="ManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain"></a>

```go
ManualChain *[]*string
```

- *Type:* *[]*string

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `OcspServers`<sup>Optional</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers"></a>

```go
OcspServers *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `RevocationSignatureAlgorithm`<sup>Optional</sup> <a name="RevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm"></a>

```go
RevocationSignatureAlgorithm *string
```

- *Type:* *string

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage"></a>

```go
Usage *string
```

- *Type:* *string

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---



