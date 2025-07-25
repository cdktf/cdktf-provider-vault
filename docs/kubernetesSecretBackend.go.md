# `kubernetesSecretBackend` Submodule <a name="`kubernetesSecretBackend` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackend <a name="KubernetesSecretBackend" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

kubernetessecretbackend.NewKubernetesSecretBackend(scope Construct, id *string, config KubernetesSecretBackendConfig) KubernetesSecretBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt">ResetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost">ResetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt">ResetServiceAccountJwt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys"></a>

```go
func ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders"></a>

```go
func ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys"></a>

```go
func ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys"></a>

```go
func ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```go
func ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors"></a>

```go
func ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableLocalCaJwt` <a name="ResetDisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt"></a>

```go
func ResetDisableLocalCaJwt()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess"></a>

```go
func ResetExternalEntropyAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey"></a>

```go
func ResetIdentityTokenKey()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert"></a>

```go
func ResetKubernetesCaCert()
```

##### `ResetKubernetesHost` <a name="ResetKubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost"></a>

```go
func ResetKubernetesHost()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility"></a>

```go
func ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds"></a>

```go
func ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders"></a>

```go
func ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion"></a>

```go
func ResetPluginVersion()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap"></a>

```go
func ResetSealWrap()
```

##### `ResetServiceAccountJwt` <a name="ResetServiceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt"></a>

```go
func ResetServiceAccountJwt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

kubernetessecretbackend.KubernetesSecretBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

kubernetessecretbackend.KubernetesSecretBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

kubernetessecretbackend.KubernetesSecretBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

kubernetessecretbackend.KubernetesSecretBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput">DisableLocalCaJwtInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput">KubernetesHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput">LocalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput">ServiceAccountJwtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost">KubernetesHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local">Local</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt">ServiceAccountJwt</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput"></a>

```go
func AllowedManagedKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput"></a>

```go
func AllowedResponseHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```go
func AuditNonHmacRequestKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```go
func AuditNonHmacResponseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```go
func DefaultLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput"></a>

```go
func DelegatedAuthAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableLocalCaJwtInput`<sup>Optional</sup> <a name="DisableLocalCaJwtInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput"></a>

```go
func DisableLocalCaJwtInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput"></a>

```go
func ExternalEntropyAccessInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput"></a>

```go
func IdentityTokenKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput"></a>

```go
func KubernetesCaCertInput() *string
```

- *Type:* *string

---

##### `KubernetesHostInput`<sup>Optional</sup> <a name="KubernetesHostInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput"></a>

```go
func KubernetesHostInput() *string
```

- *Type:* *string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput"></a>

```go
func ListingVisibilityInput() *string
```

- *Type:* *string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput"></a>

```go
func LocalInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```go
func MaxLeaseTtlSecondsInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput"></a>

```go
func PassthroughRequestHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput"></a>

```go
func PluginVersionInput() *string
```

- *Type:* *string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput"></a>

```go
func SealWrapInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountJwtInput`<sup>Optional</sup> <a name="ServiceAccountJwtInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput"></a>

```go
func ServiceAccountJwtInput() *string
```

- *Type:* *string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys"></a>

```go
func AllowedManagedKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders"></a>

```go
func AllowedResponseHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys"></a>

```go
func AuditNonHmacRequestKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys"></a>

```go
func AuditNonHmacResponseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds"></a>

```go
func DefaultLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors"></a>

```go
func DelegatedAuthAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableLocalCaJwt`<sup>Required</sup> <a name="DisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt"></a>

```go
func DisableLocalCaJwt() interface{}
```

- *Type:* interface{}

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess"></a>

```go
func ExternalEntropyAccess() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey"></a>

```go
func IdentityTokenKey() *string
```

- *Type:* *string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert"></a>

```go
func KubernetesCaCert() *string
```

- *Type:* *string

---

##### `KubernetesHost`<sup>Required</sup> <a name="KubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost"></a>

```go
func KubernetesHost() *string
```

- *Type:* *string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility"></a>

```go
func ListingVisibility() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local"></a>

```go
func Local() interface{}
```

- *Type:* interface{}

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds"></a>

```go
func MaxLeaseTtlSeconds() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders"></a>

```go
func PassthroughRequestHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion"></a>

```go
func PluginVersion() *string
```

- *Type:* *string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap"></a>

```go
func SealWrap() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountJwt`<sup>Required</sup> <a name="ServiceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt"></a>

```go
func ServiceAccountJwt() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendConfig <a name="KubernetesSecretBackendConfig" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v15/kubernetessecretbackend"

&kubernetessecretbackend.KubernetesSecretBackendConfig {
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
	DelegatedAuthAccessors: *[]*string,
	Description: *string,
	DisableLocalCaJwt: interface{},
	ExternalEntropyAccess: interface{},
	Id: *string,
	IdentityTokenKey: *string,
	KubernetesCaCert: *string,
	KubernetesHost: *string,
	ListingVisibility: *string,
	Local: interface{},
	MaxLeaseTtlSeconds: *f64,
	Namespace: *string,
	Options: *map[string]*string,
	PassthroughRequestHeaders: *[]*string,
	PluginVersion: *string,
	SealWrap: interface{},
	ServiceAccountJwt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path">Path</a></code> | <code>*string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>*[]*string</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>*[]*string</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>*f64</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description">Description</a></code> | <code>*string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt">DisableLocalCaJwt</a></code> | <code>interface{}</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>interface{}</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>*string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost">KubernetesHost</a></code> | <code>*string</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>*string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local">Local</a></code> | <code>interface{}</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>*f64</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>*[]*string</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>*string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>interface{}</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt">ServiceAccountJwt</a></code> | <code>*string</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys"></a>

```go
AllowedManagedKeys *[]*string
```

- *Type:* *[]*string

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders"></a>

```go
AllowedResponseHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```go
AuditNonHmacRequestKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```go
AuditNonHmacResponseKeys *[]*string
```

- *Type:* *[]*string

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```go
DefaultLeaseTtlSeconds *f64
```

- *Type:* *f64

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors"></a>

```go
DelegatedAuthAccessors *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `DisableLocalCaJwt`<sup>Optional</sup> <a name="DisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt"></a>

```go
DisableLocalCaJwt interface{}
```

- *Type:* interface{}

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess"></a>

```go
ExternalEntropyAccess interface{}
```

- *Type:* interface{}

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey"></a>

```go
IdentityTokenKey *string
```

- *Type:* *string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert"></a>

```go
KubernetesCaCert *string
```

- *Type:* *string

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `KubernetesHost`<sup>Optional</sup> <a name="KubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost"></a>

```go
KubernetesHost *string
```

- *Type:* *string

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility"></a>

```go
ListingVisibility *string
```

- *Type:* *string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local"></a>

```go
Local interface{}
```

- *Type:* interface{}

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```go
MaxLeaseTtlSeconds *f64
```

- *Type:* *f64

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders"></a>

```go
PassthroughRequestHeaders *[]*string
```

- *Type:* *[]*string

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion"></a>

```go
PluginVersion *string
```

- *Type:* *string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap"></a>

```go
SealWrap interface{}
```

- *Type:* interface{}

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `ServiceAccountJwt`<sup>Optional</sup> <a name="ServiceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt"></a>

```go
ServiceAccountJwt *string
```

- *Type:* *string

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---



