# `pkiSecretBackendConfigUrls` Submodule <a name="`pkiSecretBackendConfigUrls` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigUrls <a name="PkiSecretBackendConfigUrls" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls vault_pki_secret_backend_config_urls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

pkisecretbackendconfigurls.NewPkiSecretBackendConfigUrls(scope Construct, id *string, config PkiSecretBackendConfigUrlsConfig) PkiSecretBackendConfigUrls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig">PkiSecretBackendConfigUrlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig">PkiSecretBackendConfigUrlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints">ResetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetEnableTemplating">ResetEnableTemplating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates">ResetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers">ResetOcspServers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCrlDistributionPoints` <a name="ResetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints"></a>

```go
func ResetCrlDistributionPoints()
```

##### `ResetEnableTemplating` <a name="ResetEnableTemplating" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetEnableTemplating"></a>

```go
func ResetEnableTemplating()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuingCertificates` <a name="ResetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates"></a>

```go
func ResetIssuingCertificates()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOcspServers` <a name="ResetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers"></a>

```go
func ResetOcspServers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigUrls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

pkisecretbackendconfigurls.PkiSecretBackendConfigUrls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

pkisecretbackendconfigurls.PkiSecretBackendConfigUrls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

pkisecretbackendconfigurls.PkiSecretBackendConfigUrls_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

pkisecretbackendconfigurls.PkiSecretBackendConfigUrls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendConfigUrls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendConfigUrls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendConfigUrls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigUrls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput">CrlDistributionPointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.enableTemplatingInput">EnableTemplatingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput">IssuingCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput">OcspServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.enableTemplating">EnableTemplating</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates">IssuingCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers">OcspServers</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CrlDistributionPointsInput`<sup>Optional</sup> <a name="CrlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput"></a>

```go
func CrlDistributionPointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableTemplatingInput`<sup>Optional</sup> <a name="EnableTemplatingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.enableTemplatingInput"></a>

```go
func EnableTemplatingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuingCertificatesInput`<sup>Optional</sup> <a name="IssuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput"></a>

```go
func IssuingCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OcspServersInput`<sup>Optional</sup> <a name="OcspServersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput"></a>

```go
func OcspServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CrlDistributionPoints`<sup>Required</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints"></a>

```go
func CrlDistributionPoints() *[]*string
```

- *Type:* *[]*string

---

##### `EnableTemplating`<sup>Required</sup> <a name="EnableTemplating" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.enableTemplating"></a>

```go
func EnableTemplating() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuingCertificates`<sup>Required</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates"></a>

```go
func IssuingCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OcspServers`<sup>Required</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers"></a>

```go
func OcspServers() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigUrlsConfig <a name="PkiSecretBackendConfigUrlsConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v14/pkisecretbackendconfigurls"

&pkisecretbackendconfigurls.PkiSecretBackendConfigUrlsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CrlDistributionPoints: *[]*string,
	EnableTemplating: interface{},
	Id: *string,
	IssuingCertificates: *[]*string,
	Namespace: *string,
	OcspServers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints">CrlDistributionPoints</a></code> | <code>*[]*string</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.enableTemplating">EnableTemplating</a></code> | <code>interface{}</code> | Specifies that templating of AIA fields is allowed. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates">IssuingCertificates</a></code> | <code>*[]*string</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers">OcspServers</a></code> | <code>*[]*string</code> | Specifies the URL values for the OCSP Servers field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}

---

##### `CrlDistributionPoints`<sup>Optional</sup> <a name="CrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints"></a>

```go
CrlDistributionPoints *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}

---

##### `EnableTemplating`<sup>Optional</sup> <a name="EnableTemplating" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.enableTemplating"></a>

```go
EnableTemplating interface{}
```

- *Type:* interface{}

Specifies that templating of AIA fields is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#enable_templating PkiSecretBackendConfigUrls#enable_templating}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuingCertificates`<sup>Optional</sup> <a name="IssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates"></a>

```go
IssuingCertificates *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}

---

##### `OcspServers`<sup>Optional</sup> <a name="OcspServers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers"></a>

```go
OcspServers *[]*string
```

- *Type:* *[]*string

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}

---



