# `pkiSecretBackendIntermediateCertRequest` Submodule <a name="`pkiSecretBackendIntermediateCertRequest` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIntermediateCertRequest <a name="PkiSecretBackendIntermediateCertRequest" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request vault_pki_secret_backend_intermediate_cert_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

pkisecretbackendintermediatecertrequest.NewPkiSecretBackendIntermediateCertRequest(scope Construct, id *string, config PkiSecretBackendIntermediateCertRequestConfig) PkiSecretBackendIntermediateCertRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig">PkiSecretBackendIntermediateCertRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig">PkiSecretBackendIntermediateCertRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints">ResetAddBasicConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames">ResetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans">ResetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans">ResetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef">ResetKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId">ResetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName">ResetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans">ResetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu">ResetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat">ResetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSignatureBits">ResetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans">ResetUriSans</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddBasicConstraints` <a name="ResetAddBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints"></a>

```go
func ResetAddBasicConstraints()
```

##### `ResetAltNames` <a name="ResetAltNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames"></a>

```go
func ResetAltNames()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetExcludeCnFromSans` <a name="ResetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans"></a>

```go
func ResetExcludeCnFromSans()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId"></a>

```go
func ResetId()
```

##### `ResetIpSans` <a name="ResetIpSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans"></a>

```go
func ResetIpSans()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits"></a>

```go
func ResetKeyBits()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetKeyRef` <a name="ResetKeyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef"></a>

```go
func ResetKeyRef()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyUsage"></a>

```go
func ResetKeyUsage()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetManagedKeyId` <a name="ResetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId"></a>

```go
func ResetManagedKeyId()
```

##### `ResetManagedKeyName` <a name="ResetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName"></a>

```go
func ResetManagedKeyName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOtherSans` <a name="ResetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans"></a>

```go
func ResetOtherSans()
```

##### `ResetOu` <a name="ResetOu" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu"></a>

```go
func ResetOu()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetPrivateKeyFormat` <a name="ResetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat"></a>

```go
func ResetPrivateKeyFormat()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```

##### `ResetSignatureBits` <a name="ResetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSignatureBits"></a>

```go
func ResetSignatureBits()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetUriSans` <a name="ResetUriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans"></a>

```go
func ResetUriSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

pkisecretbackendintermediatecertrequest.PkiSecretBackendIntermediateCertRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

pkisecretbackendintermediatecertrequest.PkiSecretBackendIntermediateCertRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

pkisecretbackendintermediatecertrequest.PkiSecretBackendIntermediateCertRequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

pkisecretbackendintermediatecertrequest.PkiSecretBackendIntermediateCertRequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendIntermediateCertRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendIntermediateCertRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIntermediateCertRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr">Csr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput">AddBasicConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput">AltNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput">ExcludeCnFromSansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput">IpSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput">KeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput">KeyRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsageInput">KeyUsageInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput">ManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput">ManagedKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput">OtherSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput">OuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput">PrivateKeyFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput">ProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBitsInput">SignatureBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput">StreetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput">UriSansInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints">AddBasicConstraints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames">AltNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits">KeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef">KeyRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId">ManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName">ManagedKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou">Ou</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBits">SignatureBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr"></a>

```go
func Csr() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType"></a>

```go
func PrivateKeyType() *string
```

- *Type:* *string

---

##### `AddBasicConstraintsInput`<sup>Optional</sup> <a name="AddBasicConstraintsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput"></a>

```go
func AddBasicConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `AltNamesInput`<sup>Optional</sup> <a name="AltNamesInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput"></a>

```go
func AltNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSansInput`<sup>Optional</sup> <a name="ExcludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput"></a>

```go
func ExcludeCnFromSansInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpSansInput`<sup>Optional</sup> <a name="IpSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput"></a>

```go
func IpSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput"></a>

```go
func KeyBitsInput() *f64
```

- *Type:* *f64

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyRefInput`<sup>Optional</sup> <a name="KeyRefInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput"></a>

```go
func KeyRefInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsageInput"></a>

```go
func KeyUsageInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `ManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput"></a>

```go
func ManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `ManagedKeyNameInput`<sup>Optional</sup> <a name="ManagedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput"></a>

```go
func ManagedKeyNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `OtherSansInput`<sup>Optional</sup> <a name="OtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput"></a>

```go
func OtherSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `OuInput`<sup>Optional</sup> <a name="OuInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput"></a>

```go
func OuInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `PrivateKeyFormatInput`<sup>Optional</sup> <a name="PrivateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput"></a>

```go
func PrivateKeyFormatInput() *string
```

- *Type:* *string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput"></a>

```go
func ProvinceInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `SignatureBitsInput`<sup>Optional</sup> <a name="SignatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBitsInput"></a>

```go
func SignatureBitsInput() *f64
```

- *Type:* *f64

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput"></a>

```go
func StreetAddressInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriSansInput`<sup>Optional</sup> <a name="UriSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput"></a>

```go
func UriSansInput() *[]*string
```

- *Type:* *[]*string

---

##### `AddBasicConstraints`<sup>Required</sup> <a name="AddBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints"></a>

```go
func AddBasicConstraints() interface{}
```

- *Type:* interface{}

---

##### `AltNames`<sup>Required</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames"></a>

```go
func AltNames() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `ExcludeCnFromSans`<sup>Required</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans"></a>

```go
func ExcludeCnFromSans() interface{}
```

- *Type:* interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpSans`<sup>Required</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans"></a>

```go
func IpSans() *[]*string
```

- *Type:* *[]*string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits"></a>

```go
func KeyBits() *f64
```

- *Type:* *f64

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyRef`<sup>Required</sup> <a name="KeyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef"></a>

```go
func KeyRef() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsage"></a>

```go
func KeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `ManagedKeyId`<sup>Required</sup> <a name="ManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId"></a>

```go
func ManagedKeyId() *string
```

- *Type:* *string

---

##### `ManagedKeyName`<sup>Required</sup> <a name="ManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName"></a>

```go
func ManagedKeyName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OtherSans`<sup>Required</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans"></a>

```go
func OtherSans() *[]*string
```

- *Type:* *[]*string

---

##### `Ou`<sup>Required</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou"></a>

```go
func Ou() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `PrivateKeyFormat`<sup>Required</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat"></a>

```go
func PrivateKeyFormat() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `SignatureBits`<sup>Required</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBits"></a>

```go
func SignatureBits() *f64
```

- *Type:* *f64

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UriSans`<sup>Required</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans"></a>

```go
func UriSans() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIntermediateCertRequestConfig <a name="PkiSecretBackendIntermediateCertRequestConfig" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/pkisecretbackendintermediatecertrequest"

&pkisecretbackendintermediatecertrequest.PkiSecretBackendIntermediateCertRequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CommonName: *string,
	Type: *string,
	AddBasicConstraints: interface{},
	AltNames: *[]*string,
	Country: *string,
	ExcludeCnFromSans: interface{},
	Format: *string,
	Id: *string,
	IpSans: *[]*string,
	KeyBits: *f64,
	KeyName: *string,
	KeyRef: *string,
	KeyType: *string,
	KeyUsage: *[]*string,
	Locality: *string,
	ManagedKeyId: *string,
	ManagedKeyName: *string,
	Namespace: *string,
	Organization: *string,
	OtherSans: *[]*string,
	Ou: *string,
	PostalCode: *string,
	PrivateKeyFormat: *string,
	Province: *string,
	SerialNumber: *string,
	SignatureBits: *f64,
	StreetAddress: *string,
	UriSans: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend">Backend</a></code> | <code>*string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName">CommonName</a></code> | <code>*string</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type">Type</a></code> | <code>*string</code> | Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints">AddBasicConstraints</a></code> | <code>interface{}</code> | Set 'CA: true' in a Basic Constraints extension. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames">AltNames</a></code> | <code>*[]*string</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country">Country</a></code> | <code>*string</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans">ExcludeCnFromSans</a></code> | <code>interface{}</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format">Format</a></code> | <code>*string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans">IpSans</a></code> | <code>*[]*string</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits">KeyBits</a></code> | <code>*f64</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName">KeyName</a></code> | <code>*string</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef">KeyRef</a></code> | <code>*string</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType">KeyType</a></code> | <code>*string</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | Specify the key usages to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality">Locality</a></code> | <code>*string</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId">ManagedKeyId</a></code> | <code>*string</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName">ManagedKeyName</a></code> | <code>*string</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans">OtherSans</a></code> | <code>*[]*string</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou">Ou</a></code> | <code>*string</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat">PrivateKeyFormat</a></code> | <code>*string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province">Province</a></code> | <code>*string</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | The requested Subject's named serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.signatureBits">SignatureBits</a></code> | <code>*f64</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans">UriSans</a></code> | <code>*[]*string</code> | List of alternative URIs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#backend PkiSecretBackendIntermediateCertRequest#backend}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#common_name PkiSecretBackendIntermediateCertRequest#common_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#type PkiSecretBackendIntermediateCertRequest#type}

---

##### `AddBasicConstraints`<sup>Optional</sup> <a name="AddBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints"></a>

```go
AddBasicConstraints interface{}
```

- *Type:* interface{}

Set 'CA: true' in a Basic Constraints extension.

Only needed as
a workaround in some compatibility scenarios with Active Directory Certificate Services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#add_basic_constraints PkiSecretBackendIntermediateCertRequest#add_basic_constraints}

---

##### `AltNames`<sup>Optional</sup> <a name="AltNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames"></a>

```go
AltNames *[]*string
```

- *Type:* *[]*string

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#alt_names PkiSecretBackendIntermediateCertRequest#alt_names}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#country PkiSecretBackendIntermediateCertRequest#country}

---

##### `ExcludeCnFromSans`<sup>Optional</sup> <a name="ExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans"></a>

```go
ExcludeCnFromSans interface{}
```

- *Type:* interface{}

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#exclude_cn_from_sans PkiSecretBackendIntermediateCertRequest#exclude_cn_from_sans}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#format PkiSecretBackendIntermediateCertRequest#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpSans`<sup>Optional</sup> <a name="IpSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans"></a>

```go
IpSans *[]*string
```

- *Type:* *[]*string

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#ip_sans PkiSecretBackendIntermediateCertRequest#ip_sans}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits"></a>

```go
KeyBits *f64
```

- *Type:* *f64

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_bits PkiSecretBackendIntermediateCertRequest#key_bits}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_name PkiSecretBackendIntermediateCertRequest#key_name}

---

##### `KeyRef`<sup>Optional</sup> <a name="KeyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef"></a>

```go
KeyRef *string
```

- *Type:* *string

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_ref PkiSecretBackendIntermediateCertRequest#key_ref}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_type PkiSecretBackendIntermediateCertRequest#key_type}

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyUsage"></a>

```go
KeyUsage *[]*string
```

- *Type:* *[]*string

Specify the key usages to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_usage PkiSecretBackendIntermediateCertRequest#key_usage}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#locality PkiSecretBackendIntermediateCertRequest#locality}

---

##### `ManagedKeyId`<sup>Optional</sup> <a name="ManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId"></a>

```go
ManagedKeyId *string
```

- *Type:* *string

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_id PkiSecretBackendIntermediateCertRequest#managed_key_id}

---

##### `ManagedKeyName`<sup>Optional</sup> <a name="ManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName"></a>

```go
ManagedKeyName *string
```

- *Type:* *string

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_name PkiSecretBackendIntermediateCertRequest#managed_key_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#namespace PkiSecretBackendIntermediateCertRequest#namespace}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#organization PkiSecretBackendIntermediateCertRequest#organization}

---

##### `OtherSans`<sup>Optional</sup> <a name="OtherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans"></a>

```go
OtherSans *[]*string
```

- *Type:* *[]*string

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#other_sans PkiSecretBackendIntermediateCertRequest#other_sans}

---

##### `Ou`<sup>Optional</sup> <a name="Ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou"></a>

```go
Ou *string
```

- *Type:* *string

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#ou PkiSecretBackendIntermediateCertRequest#ou}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#postal_code PkiSecretBackendIntermediateCertRequest#postal_code}

---

##### `PrivateKeyFormat`<sup>Optional</sup> <a name="PrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat"></a>

```go
PrivateKeyFormat *string
```

- *Type:* *string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#private_key_format PkiSecretBackendIntermediateCertRequest#private_key_format}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province"></a>

```go
Province *string
```

- *Type:* *string

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#province PkiSecretBackendIntermediateCertRequest#province}

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

The requested Subject's named serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#serial_number PkiSecretBackendIntermediateCertRequest#serial_number}

---

##### `SignatureBits`<sup>Optional</sup> <a name="SignatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.signatureBits"></a>

```go
SignatureBits *f64
```

- *Type:* *f64

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#signature_bits PkiSecretBackendIntermediateCertRequest#signature_bits}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress"></a>

```go
StreetAddress *string
```

- *Type:* *string

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#street_address PkiSecretBackendIntermediateCertRequest#street_address}

---

##### `UriSans`<sup>Optional</sup> <a name="UriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans"></a>

```go
UriSans *[]*string
```

- *Type:* *[]*string

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_intermediate_cert_request#uri_sans PkiSecretBackendIntermediateCertRequest#uri_sans}

---



