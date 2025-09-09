# `consulSecretBackend` Submodule <a name="`consulSecretBackend` Submodule" id="@cdktf/provider-vault.consulSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackend <a name="ConsulSecretBackend" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend vault_consul_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

consulsecretbackend.NewConsulSecretBackend(scope Construct, id *string, config ConsulSecretBackendConfig) ConsulSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig">ConsulSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig">ConsulSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap">ResetBootstrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedManagedKeys"></a>

```go
func ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetBootstrap` <a name="ResetBootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetBootstrap"></a>

```go
func ResetBootstrap()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetCaCert"></a>

```go
func ResetCaCert()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientCert"></a>

```go
func ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDelegatedAuthAccessors"></a>

```go
func ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetDisableRemount"></a>

```go
func ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetExternalEntropyAccess"></a>

```go
func ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetForceNoCache"></a>

```go
func ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetIdentityTokenKey"></a>

```go
func ResetIdentityTokenKey()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetPluginVersion"></a>

```go
func ResetPluginVersion()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetScheme"></a>

```go
func ResetScheme()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetSealWrap"></a>

```go
func ResetSealWrap()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

consulsecretbackend.ConsulSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

consulsecretbackend.ConsulSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

consulsecretbackend.ConsulSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

consulsecretbackend.ConsulSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConsulSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConsulSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConsulSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput">BootstrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput">ClientCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap">Bootstrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert">ClientCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeysInput"></a>

```go
func AllowedManagedKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `BootstrapInput`<sup>Optional</sup> <a name="BootstrapInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrapInput"></a>

```go
func BootstrapInput() interface{}
```

- *Type:* interface{}

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCertInput"></a>

```go
func ClientCertInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessorsInput"></a>

```go
func DelegatedAuthAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemountInput"></a>

```go
func DisableRemountInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccessInput"></a>

```go
func ExternalEntropyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCacheInput"></a>

```go
func ForceNoCacheInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKeyInput"></a>

```go
func IdentityTokenKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersionInput"></a>

```go
func PluginVersionInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrapInput"></a>

```go
func SealWrapInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedManagedKeys"></a>

```go
func AllowedManagedKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Bootstrap`<sup>Required</sup> <a name="Bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.bootstrap"></a>

```go
func Bootstrap() interface{}
```

- *Type:* interface{}

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `ClientCert`<sup>Required</sup> <a name="ClientCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientCert"></a>

```go
func ClientCert() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.delegatedAuthAccessors"></a>

```go
func DelegatedAuthAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.disableRemount"></a>

```go
func DisableRemount() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.externalEntropyAccess"></a>

```go
func ExternalEntropyAccess() interface{}
```

- *Type:* interface{}

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.forceNoCache"></a>

```go
func ForceNoCache() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.identityTokenKey"></a>

```go
func IdentityTokenKey() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.pluginVersion"></a>

```go
func PluginVersion() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.sealWrap"></a>

```go
func SealWrap() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendConfig <a name="ConsulSecretBackendConfig" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/consulsecretbackend"

&consulsecretbackend.ConsulSecretBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	AllowedManagedKeys: *[]*string,
	AllowedResponseHeaders: *[]*string,
	AuditNonHmacRequestKeys: *[]*string,
	AuditNonHmacResponseKeys: *[]*string,
	Bootstrap: interface{},
	CaCert: *string,
	ClientCert: *string,
	ClientKey: *string,
	DefaultLeaseTtlSeconds: *f64,
	DelegatedAuthAccessors: *[]*string,
	Description: *string,
	DisableRemount: interface{},
	ExternalEntropyAccess: interface{},
	ForceNoCache: interface{},
	Id: *string,
	IdentityTokenKey: *string,
	ListingVisibility: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Options: *map[string]*string,
	PassthroughRequestHeaders: *[]*string,
	Path: *string,
	PluginVersion: *string,
	Scheme: *string,
	SealWrap: interface{},
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address">Address</a></code> | <code>*string</code> | Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap">Bootstrap</a></code> | <code>interface{}</code> | Denotes a backend resource that is used to bootstrap the Consul ACL system. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert">CaCert</a></code> | <code>*string</code> | CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert">ClientCert</a></code> | <code>*string</code> | Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>interface{}</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>interface{}</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Unique name of the Vault Consul mount to configure. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Specifies the URL scheme to use. Defaults to "http". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token">Token</a></code> | <code>*string</code> | Specifies the Consul token to use when managing or issuing new tokens. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedManagedKeys"></a>

```go
AllowedManagedKeys *[]*string
```

- *Type:* *[]*string

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#allowed_managed_keys ConsulSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#allowed_response_headers ConsulSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#audit_non_hmac_request_keys ConsulSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#audit_non_hmac_response_keys ConsulSecretBackend#audit_non_hmac_response_keys}

---

##### `Bootstrap`<sup>Optional</sup> <a name="Bootstrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.bootstrap"></a>

```go
Bootstrap interface{}
```

- *Type:* interface{}

Denotes a backend resource that is used to bootstrap the Consul ACL system.

Only one resource may be used to bootstrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientCert"></a>

```go
ClientCert *string
```

- *Type:* *string

Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.delegatedAuthAccessors"></a>

```go
DelegatedAuthAccessors *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#delegated_auth_accessors ConsulSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.disableRemount"></a>

```go
DisableRemount interface{}
```

- *Type:* interface{}

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.externalEntropyAccess"></a>

```go
ExternalEntropyAccess interface{}
```

- *Type:* interface{}

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#external_entropy_access ConsulSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.forceNoCache"></a>

```go
ForceNoCache interface{}
```

- *Type:* interface{}

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#force_no_cache ConsulSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.identityTokenKey"></a>

```go
IdentityTokenKey *string
```

- *Type:* *string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#identity_token_key ConsulSecretBackend#identity_token_key}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#listing_visibility ConsulSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#options ConsulSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#passthrough_request_headers ConsulSecretBackend#passthrough_request_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Unique name of the Vault Consul mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.pluginVersion"></a>

```go
PluginVersion *string
```

- *Type:* *string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#plugin_version ConsulSecretBackend#plugin_version}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Specifies the URL scheme to use. Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.sealWrap"></a>

```go
SealWrap interface{}
```

- *Type:* interface{}

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#seal_wrap ConsulSecretBackend#seal_wrap}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-vault.consulSecretBackend.ConsulSecretBackendConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Specifies the Consul token to use when managing or issuing new tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}

---



