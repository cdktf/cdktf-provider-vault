# `kmipSecretBackend` Submodule <a name="`kmipSecretBackend` Submodule" id="@cdktf/provider-vault.kmipSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretBackend <a name="KmipSecretBackend" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

kmipsecretbackend.NewKmipSecretBackend(scope Construct, id *string, config KmipSecretBackendConfig) KmipSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits">ResetDefaultTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType">ResetDefaultTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl">ResetDefaultTlsClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs">ResetListenAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames">ResetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps">ResetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits">ResetTlsCaKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType">ResetTlsCaKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys"></a>

```go
func ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDefaultTlsClientKeyBits` <a name="ResetDefaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits"></a>

```go
func ResetDefaultTlsClientKeyBits()
```

##### `ResetDefaultTlsClientKeyType` <a name="ResetDefaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType"></a>

```go
func ResetDefaultTlsClientKeyType()
```

##### `ResetDefaultTlsClientTtl` <a name="ResetDefaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl"></a>

```go
func ResetDefaultTlsClientTtl()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors"></a>

```go
func ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess"></a>

```go
func ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache"></a>

```go
func ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey"></a>

```go
func ResetIdentityTokenKey()
```

##### `ResetListenAddrs` <a name="ResetListenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs"></a>

```go
func ResetListenAddrs()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion"></a>

```go
func ResetPluginVersion()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap"></a>

```go
func ResetSealWrap()
```

##### `ResetServerHostnames` <a name="ResetServerHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames"></a>

```go
func ResetServerHostnames()
```

##### `ResetServerIps` <a name="ResetServerIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps"></a>

```go
func ResetServerIps()
```

##### `ResetTlsCaKeyBits` <a name="ResetTlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits"></a>

```go
func ResetTlsCaKeyBits()
```

##### `ResetTlsCaKeyType` <a name="ResetTlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType"></a>

```go
func ResetTlsCaKeyType()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion"></a>

```go
func ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmipSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

kmipsecretbackend.KmipSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

kmipsecretbackend.KmipSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

kmipsecretbackend.KmipSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

kmipsecretbackend.KmipSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmipSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmipSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmipSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmipSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput">DefaultTlsClientKeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput">DefaultTlsClientKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput">DefaultTlsClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput">ListenAddrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput">ServerHostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput">ServerIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput">TlsCaKeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput">TlsCaKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits">DefaultTlsClientKeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType">DefaultTlsClientKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl">DefaultTlsClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs">ListenAddrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames">ServerHostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps">ServerIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits">TlsCaKeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType">TlsCaKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput"></a>

```go
func AllowedManagedKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DefaultTlsClientKeyBitsInput`<sup>Optional</sup> <a name="DefaultTlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput"></a>

```go
func DefaultTlsClientKeyBitsInput() *f64
```

- *Type:* *f64

---

##### `DefaultTlsClientKeyTypeInput`<sup>Optional</sup> <a name="DefaultTlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput"></a>

```go
func DefaultTlsClientKeyTypeInput() *string
```

- *Type:* *string

---

##### `DefaultTlsClientTtlInput`<sup>Optional</sup> <a name="DefaultTlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput"></a>

```go
func DefaultTlsClientTtlInput() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput"></a>

```go
func DelegatedAuthAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput"></a>

```go
func ExternalEntropyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput"></a>

```go
func ForceNoCacheInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput"></a>

```go
func IdentityTokenKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenAddrsInput`<sup>Optional</sup> <a name="ListenAddrsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput"></a>

```go
func ListenAddrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput"></a>

```go
func PluginVersionInput() *string
```

- *Type:* *string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput"></a>

```go
func SealWrapInput() interface{}
```

- *Type:* interface{}

---

##### `ServerHostnamesInput`<sup>Optional</sup> <a name="ServerHostnamesInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput"></a>

```go
func ServerHostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerIpsInput`<sup>Optional</sup> <a name="ServerIpsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput"></a>

```go
func ServerIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TlsCaKeyBitsInput`<sup>Optional</sup> <a name="TlsCaKeyBitsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput"></a>

```go
func TlsCaKeyBitsInput() *f64
```

- *Type:* *f64

---

##### `TlsCaKeyTypeInput`<sup>Optional</sup> <a name="TlsCaKeyTypeInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput"></a>

```go
func TlsCaKeyTypeInput() *string
```

- *Type:* *string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput"></a>

```go
func TlsMinVersionInput() *string
```

- *Type:* *string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys"></a>

```go
func AllowedManagedKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `DefaultTlsClientKeyBits`<sup>Required</sup> <a name="DefaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits"></a>

```go
func DefaultTlsClientKeyBits() *f64
```

- *Type:* *f64

---

##### `DefaultTlsClientKeyType`<sup>Required</sup> <a name="DefaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType"></a>

```go
func DefaultTlsClientKeyType() *string
```

- *Type:* *string

---

##### `DefaultTlsClientTtl`<sup>Required</sup> <a name="DefaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl"></a>

```go
func DefaultTlsClientTtl() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors"></a>

```go
func DelegatedAuthAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess"></a>

```go
func ExternalEntropyAccess() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache"></a>

```go
func ForceNoCache() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey"></a>

```go
func IdentityTokenKey() *string
```

- *Type:* *string

---

##### `ListenAddrs`<sup>Required</sup> <a name="ListenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs"></a>

```go
func ListenAddrs() *[]*string
```

- *Type:* *[]*string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion"></a>

```go
func PluginVersion() *string
```

- *Type:* *string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap"></a>

```go
func SealWrap() interface{}
```

- *Type:* interface{}

---

##### `ServerHostnames`<sup>Required</sup> <a name="ServerHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames"></a>

```go
func ServerHostnames() *[]*string
```

- *Type:* *[]*string

---

##### `ServerIps`<sup>Required</sup> <a name="ServerIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps"></a>

```go
func ServerIps() *[]*string
```

- *Type:* *[]*string

---

##### `TlsCaKeyBits`<sup>Required</sup> <a name="TlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits"></a>

```go
func TlsCaKeyBits() *f64
```

- *Type:* *f64

---

##### `TlsCaKeyType`<sup>Required</sup> <a name="TlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType"></a>

```go
func TlsCaKeyType() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretBackendConfig <a name="KmipSecretBackendConfig" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kmipsecretbackend"

&kmipsecretbackend.KmipSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	AllowedManagedKeys: *[]*string,
	AllowedResponseHeaders: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	DefaultLeaseTtlSeconds: *f64,
	DefaultTlsClientKeyBits: *f64,
	DefaultTlsClientKeyType: *string,
	DefaultTlsClientTtl: *f64,
	DelegatedAuthAccessors: *[]*string,
	Description: *string,
	DisableRemount: interface{},
	ExternalEntropyAccess: interface{},
	ForceNoCache: interface{},
	Id: *string,
	IdentityTokenKey: *string,
	ListenAddrs: *[]*string,
	ListingVisibility: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Options: *map[string]*string,
	PassthroughRequestHeaders: *[]*string,
	PluginVersion: *string,
	SealWrap: interface{},
	ServerHostnames: *[]*string,
	ServerIps: *[]*string,
	TlsCaKeyBits: *f64,
	TlsCaKeyType: *string,
	TlsMinVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Path where KMIP secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits">DefaultTlsClientKeyBits</a></code> | <code>*f64</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType">DefaultTlsClientKeyType</a></code> | <code>*string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl">DefaultTlsClientTtl</a></code> | <code>*f64</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs">ListenAddrs</a></code> | <code>*[]*string</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames">ServerHostnames</a></code> | <code>*[]*string</code> | Hostnames to include in the server's TLS certificate as SAN DNS names. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps">ServerIps</a></code> | <code>*[]*string</code> | IPs to include in the server's TLS certificate as SAN IP addresses. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits">TlsCaKeyBits</a></code> | <code>*f64</code> | CA key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType">TlsCaKeyType</a></code> | <code>*string</code> | CA key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | Minimum TLS version to accept. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path where KMIP secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys"></a>

```go
AllowedManagedKeys *[]*string
```

- *Type:* *[]*string

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_managed_keys KmipSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#allowed_response_headers KmipSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_request_keys KmipSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#audit_non_hmac_response_keys KmipSecretBackend#audit_non_hmac_response_keys}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_lease_ttl_seconds KmipSecretBackend#default_lease_ttl_seconds}

---

##### `DefaultTlsClientKeyBits`<sup>Optional</sup> <a name="DefaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits"></a>

```go
DefaultTlsClientKeyBits *f64
```

- *Type:* *f64

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `DefaultTlsClientKeyType`<sup>Optional</sup> <a name="DefaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType"></a>

```go
DefaultTlsClientKeyType *string
```

- *Type:* *string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `DefaultTlsClientTtl`<sup>Optional</sup> <a name="DefaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl"></a>

```go
DefaultTlsClientTtl *f64
```

- *Type:* *f64

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors"></a>

```go
DelegatedAuthAccessors *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#delegated_auth_accessors KmipSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess"></a>

```go
ExternalEntropyAccess interface{}
```

- *Type:* interface{}

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#external_entropy_access KmipSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache"></a>

```go
ForceNoCache interface{}
```

- *Type:* interface{}

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#force_no_cache KmipSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey"></a>

```go
IdentityTokenKey *string
```

- *Type:* *string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#identity_token_key KmipSecretBackend#identity_token_key}

---

##### `ListenAddrs`<sup>Optional</sup> <a name="ListenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs"></a>

```go
ListenAddrs *[]*string
```

- *Type:* *[]*string

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#listing_visibility KmipSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#local KmipSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#max_lease_ttl_seconds KmipSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#options KmipSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#passthrough_request_headers KmipSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion"></a>

```go
PluginVersion *string
```

- *Type:* *string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#plugin_version KmipSecretBackend#plugin_version}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap"></a>

```go
SealWrap interface{}
```

- *Type:* interface{}

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#seal_wrap KmipSecretBackend#seal_wrap}

---

##### `ServerHostnames`<sup>Optional</sup> <a name="ServerHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames"></a>

```go
ServerHostnames *[]*string
```

- *Type:* *[]*string

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `ServerIps`<sup>Optional</sup> <a name="ServerIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps"></a>

```go
ServerIps *[]*string
```

- *Type:* *[]*string

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `TlsCaKeyBits`<sup>Optional</sup> <a name="TlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits"></a>

```go
TlsCaKeyBits *f64
```

- *Type:* *f64

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `TlsCaKeyType`<sup>Optional</sup> <a name="TlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType"></a>

```go
TlsCaKeyType *string
```

- *Type:* *string

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion"></a>

```go
TlsMinVersion *string
```

- *Type:* *string

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---



