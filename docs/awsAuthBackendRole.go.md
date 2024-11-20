# `awsAuthBackendRole` Submodule <a name="`awsAuthBackendRole` Submodule" id="@cdktf/provider-vault.awsAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRole <a name="AwsAuthBackendRole" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

awsauthbackendrole.NewAwsAuthBackendRole(scope Construct, id *string, config AwsAuthBackendRoleConfig) AwsAuthBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig">AwsAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig">AwsAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration">ResetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds">ResetBoundAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds">ResetBoundAmiIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds">ResetBoundEc2InstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns">ResetBoundIamInstanceProfileArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns">ResetBoundIamPrincipalArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns">ResetBoundIamRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions">ResetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds">ResetBoundSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds">ResetBoundVpcIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication">ResetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion">ResetInferredAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType">ResetInferredEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds">ResetResolveAwsUniqueIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag">ResetRoleTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowInstanceMigration` <a name="ResetAllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration"></a>

```go
func ResetAllowInstanceMigration()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetBoundAccountIds` <a name="ResetBoundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds"></a>

```go
func ResetBoundAccountIds()
```

##### `ResetBoundAmiIds` <a name="ResetBoundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds"></a>

```go
func ResetBoundAmiIds()
```

##### `ResetBoundEc2InstanceIds` <a name="ResetBoundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds"></a>

```go
func ResetBoundEc2InstanceIds()
```

##### `ResetBoundIamInstanceProfileArns` <a name="ResetBoundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns"></a>

```go
func ResetBoundIamInstanceProfileArns()
```

##### `ResetBoundIamPrincipalArns` <a name="ResetBoundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns"></a>

```go
func ResetBoundIamPrincipalArns()
```

##### `ResetBoundIamRoleArns` <a name="ResetBoundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns"></a>

```go
func ResetBoundIamRoleArns()
```

##### `ResetBoundRegions` <a name="ResetBoundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions"></a>

```go
func ResetBoundRegions()
```

##### `ResetBoundSubnetIds` <a name="ResetBoundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds"></a>

```go
func ResetBoundSubnetIds()
```

##### `ResetBoundVpcIds` <a name="ResetBoundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds"></a>

```go
func ResetBoundVpcIds()
```

##### `ResetDisallowReauthentication` <a name="ResetDisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication"></a>

```go
func ResetDisallowReauthentication()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetInferredAwsRegion` <a name="ResetInferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion"></a>

```go
func ResetInferredAwsRegion()
```

##### `ResetInferredEntityType` <a name="ResetInferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType"></a>

```go
func ResetInferredEntityType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetResolveAwsUniqueIds` <a name="ResetResolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds"></a>

```go
func ResetResolveAwsUniqueIds()
```

##### `ResetRoleTag` <a name="ResetRoleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag"></a>

```go
func ResetRoleTag()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType"></a>

```go
func ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

awsauthbackendrole.AwsAuthBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

awsauthbackendrole.AwsAuthBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

awsauthbackendrole.AwsAuthBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

awsauthbackendrole.AwsAuthBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AwsAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AwsAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AwsAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput">AllowInstanceMigrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput">BoundAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput">BoundAmiIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput">BoundEc2InstanceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput">BoundIamInstanceProfileArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput">BoundIamPrincipalArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput">BoundIamRoleArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput">BoundRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput">BoundSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput">BoundVpcIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput">DisallowReauthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput">InferredAwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput">InferredEntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput">ResolveAwsUniqueIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput">RoleTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds">BoundAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds">BoundAmiIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds">BoundEc2InstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns">BoundIamInstanceProfileArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns">BoundIamPrincipalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns">BoundIamRoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions">BoundRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds">BoundSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds">BoundVpcIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion">InferredAwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType">InferredEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds">ResolveAwsUniqueIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag">RoleTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `AllowInstanceMigrationInput`<sup>Optional</sup> <a name="AllowInstanceMigrationInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput"></a>

```go
func AllowInstanceMigrationInput() interface{}
```

- *Type:* interface{}

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BoundAccountIdsInput`<sup>Optional</sup> <a name="BoundAccountIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput"></a>

```go
func BoundAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundAmiIdsInput`<sup>Optional</sup> <a name="BoundAmiIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput"></a>

```go
func BoundAmiIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundEc2InstanceIdsInput`<sup>Optional</sup> <a name="BoundEc2InstanceIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput"></a>

```go
func BoundEc2InstanceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamInstanceProfileArnsInput`<sup>Optional</sup> <a name="BoundIamInstanceProfileArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput"></a>

```go
func BoundIamInstanceProfileArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamPrincipalArnsInput`<sup>Optional</sup> <a name="BoundIamPrincipalArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput"></a>

```go
func BoundIamPrincipalArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamRoleArnsInput`<sup>Optional</sup> <a name="BoundIamRoleArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput"></a>

```go
func BoundIamRoleArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundRegionsInput`<sup>Optional</sup> <a name="BoundRegionsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput"></a>

```go
func BoundRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundSubnetIdsInput`<sup>Optional</sup> <a name="BoundSubnetIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput"></a>

```go
func BoundSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundVpcIdsInput`<sup>Optional</sup> <a name="BoundVpcIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput"></a>

```go
func BoundVpcIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowReauthenticationInput`<sup>Optional</sup> <a name="DisallowReauthenticationInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput"></a>

```go
func DisallowReauthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferredAwsRegionInput`<sup>Optional</sup> <a name="InferredAwsRegionInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput"></a>

```go
func InferredAwsRegionInput() *string
```

- *Type:* *string

---

##### `InferredEntityTypeInput`<sup>Optional</sup> <a name="InferredEntityTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput"></a>

```go
func InferredEntityTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResolveAwsUniqueIdsInput`<sup>Optional</sup> <a name="ResolveAwsUniqueIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput"></a>

```go
func ResolveAwsUniqueIdsInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `RoleTagInput`<sup>Optional</sup> <a name="RoleTagInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput"></a>

```go
func RoleTagInput() *string
```

- *Type:* *string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `AllowInstanceMigration`<sup>Required</sup> <a name="AllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration"></a>

```go
func AllowInstanceMigration() interface{}
```

- *Type:* interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `BoundAccountIds`<sup>Required</sup> <a name="BoundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds"></a>

```go
func BoundAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `BoundAmiIds`<sup>Required</sup> <a name="BoundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds"></a>

```go
func BoundAmiIds() *[]*string
```

- *Type:* *[]*string

---

##### `BoundEc2InstanceIds`<sup>Required</sup> <a name="BoundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds"></a>

```go
func BoundEc2InstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamInstanceProfileArns`<sup>Required</sup> <a name="BoundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns"></a>

```go
func BoundIamInstanceProfileArns() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamPrincipalArns`<sup>Required</sup> <a name="BoundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns"></a>

```go
func BoundIamPrincipalArns() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIamRoleArns`<sup>Required</sup> <a name="BoundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns"></a>

```go
func BoundIamRoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `BoundRegions`<sup>Required</sup> <a name="BoundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions"></a>

```go
func BoundRegions() *[]*string
```

- *Type:* *[]*string

---

##### `BoundSubnetIds`<sup>Required</sup> <a name="BoundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds"></a>

```go
func BoundSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `BoundVpcIds`<sup>Required</sup> <a name="BoundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds"></a>

```go
func BoundVpcIds() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowReauthentication`<sup>Required</sup> <a name="DisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication"></a>

```go
func DisallowReauthentication() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InferredAwsRegion`<sup>Required</sup> <a name="InferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion"></a>

```go
func InferredAwsRegion() *string
```

- *Type:* *string

---

##### `InferredEntityType`<sup>Required</sup> <a name="InferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType"></a>

```go
func InferredEntityType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResolveAwsUniqueIds`<sup>Required</sup> <a name="ResolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds"></a>

```go
func ResolveAwsUniqueIds() interface{}
```

- *Type:* interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `RoleTag`<sup>Required</sup> <a name="RoleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag"></a>

```go
func RoleTag() *string
```

- *Type:* *string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleConfig <a name="AwsAuthBackendRoleConfig" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/v13/awsauthbackendrole"

&awsauthbackendrole.AwsAuthBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	AllowInstanceMigration: interface{},
	AuthType: *string,
	Backend: *string,
	BoundAccountIds: *[]*string,
	BoundAmiIds: *[]*string,
	BoundEc2InstanceIds: *[]*string,
	BoundIamInstanceProfileArns: *[]*string,
	BoundIamPrincipalArns: *[]*string,
	BoundIamRoleArns: *[]*string,
	BoundRegions: *[]*string,
	BoundSubnetIds: *[]*string,
	BoundVpcIds: *[]*string,
	DisallowReauthentication: interface{},
	Id: *string,
	InferredAwsRegion: *string,
	InferredEntityType: *string,
	Namespace: *string,
	ResolveAwsUniqueIds: interface{},
	RoleTag: *string,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role">Role</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>interface{}</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType">AuthType</a></code> | <code>*string</code> | The auth type permitted for this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds">BoundAccountIds</a></code> | <code>*[]*string</code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds">BoundAmiIds</a></code> | <code>*[]*string</code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds">BoundEc2InstanceIds</a></code> | <code>*[]*string</code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns">BoundIamInstanceProfileArns</a></code> | <code>*[]*string</code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns">BoundIamPrincipalArns</a></code> | <code>*[]*string</code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns">BoundIamRoleArns</a></code> | <code>*[]*string</code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions">BoundRegions</a></code> | <code>*[]*string</code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds">BoundSubnetIds</a></code> | <code>*[]*string</code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds">BoundVpcIds</a></code> | <code>*[]*string</code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>interface{}</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion">InferredAwsRegion</a></code> | <code>*string</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType">InferredEntityType</a></code> | <code>*string</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds">ResolveAwsUniqueIds</a></code> | <code>interface{}</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag">RoleTag</a></code> | <code>*string</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `AllowInstanceMigration`<sup>Optional</sup> <a name="AllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration"></a>

```go
AllowInstanceMigration interface{}
```

- *Type:* interface{}

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `BoundAccountIds`<sup>Optional</sup> <a name="BoundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds"></a>

```go
BoundAccountIds *[]*string
```

- *Type:* *[]*string

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `BoundAmiIds`<sup>Optional</sup> <a name="BoundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds"></a>

```go
BoundAmiIds *[]*string
```

- *Type:* *[]*string

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `BoundEc2InstanceIds`<sup>Optional</sup> <a name="BoundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds"></a>

```go
BoundEc2InstanceIds *[]*string
```

- *Type:* *[]*string

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `BoundIamInstanceProfileArns`<sup>Optional</sup> <a name="BoundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns"></a>

```go
BoundIamInstanceProfileArns *[]*string
```

- *Type:* *[]*string

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `BoundIamPrincipalArns`<sup>Optional</sup> <a name="BoundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns"></a>

```go
BoundIamPrincipalArns *[]*string
```

- *Type:* *[]*string

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `BoundIamRoleArns`<sup>Optional</sup> <a name="BoundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns"></a>

```go
BoundIamRoleArns *[]*string
```

- *Type:* *[]*string

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `BoundRegions`<sup>Optional</sup> <a name="BoundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions"></a>

```go
BoundRegions *[]*string
```

- *Type:* *[]*string

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `BoundSubnetIds`<sup>Optional</sup> <a name="BoundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds"></a>

```go
BoundSubnetIds *[]*string
```

- *Type:* *[]*string

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `BoundVpcIds`<sup>Optional</sup> <a name="BoundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds"></a>

```go
BoundVpcIds *[]*string
```

- *Type:* *[]*string

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `DisallowReauthentication`<sup>Optional</sup> <a name="DisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication"></a>

```go
DisallowReauthentication interface{}
```

- *Type:* interface{}

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferredAwsRegion`<sup>Optional</sup> <a name="InferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion"></a>

```go
InferredAwsRegion *string
```

- *Type:* *string

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `InferredEntityType`<sup>Optional</sup> <a name="InferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType"></a>

```go
InferredEntityType *string
```

- *Type:* *string

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `ResolveAwsUniqueIds`<sup>Optional</sup> <a name="ResolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds"></a>

```go
ResolveAwsUniqueIds interface{}
```

- *Type:* interface{}

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `RoleTag`<sup>Optional</sup> <a name="RoleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag"></a>

```go
RoleTag *string
```

- *Type:* *string

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---



