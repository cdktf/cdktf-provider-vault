# `vault_ssh_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_ssh_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role).

# `sshSecretBackendRole` Submodule <a name="`sshSecretBackendRole` Submodule" id="@cdktf/provider-vault.sshSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendRole <a name="SshSecretBackendRole" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.NewSshSecretBackendRole(scope Construct, id *string, config SshSecretBackendRoleConfig) SshSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig">PutAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner">ResetAlgorithmSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains">ResetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions">ResetAllowedCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate">ResetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions">ResetAllowedExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig">ResetAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths">ResetAllowedUserKeyLengths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers">ResetAllowedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate">ResetAllowedUsersTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates">ResetAllowHostCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains">ResetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates">ResetAllowUserCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds">ResetAllowUserKeyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions">ResetDefaultCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions">ResetDefaultExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser">ResetDefaultUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate">ResetDefaultUserTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat">ResetKeyIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllowedUserKeyConfig` <a name="PutAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig"></a>

```go
func PutAllowedUserKeyConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlgorithmSigner` <a name="ResetAlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner"></a>

```go
func ResetAlgorithmSigner()
```

##### `ResetAllowBareDomains` <a name="ResetAllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains"></a>

```go
func ResetAllowBareDomains()
```

##### `ResetAllowedCriticalOptions` <a name="ResetAllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions"></a>

```go
func ResetAllowedCriticalOptions()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains"></a>

```go
func ResetAllowedDomains()
```

##### `ResetAllowedDomainsTemplate` <a name="ResetAllowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate"></a>

```go
func ResetAllowedDomainsTemplate()
```

##### `ResetAllowedExtensions` <a name="ResetAllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions"></a>

```go
func ResetAllowedExtensions()
```

##### `ResetAllowedUserKeyConfig` <a name="ResetAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig"></a>

```go
func ResetAllowedUserKeyConfig()
```

##### `ResetAllowedUserKeyLengths` <a name="ResetAllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths"></a>

```go
func ResetAllowedUserKeyLengths()
```

##### `ResetAllowedUsers` <a name="ResetAllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers"></a>

```go
func ResetAllowedUsers()
```

##### `ResetAllowedUsersTemplate` <a name="ResetAllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate"></a>

```go
func ResetAllowedUsersTemplate()
```

##### `ResetAllowHostCertificates` <a name="ResetAllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates"></a>

```go
func ResetAllowHostCertificates()
```

##### `ResetAllowSubdomains` <a name="ResetAllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains"></a>

```go
func ResetAllowSubdomains()
```

##### `ResetAllowUserCertificates` <a name="ResetAllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates"></a>

```go
func ResetAllowUserCertificates()
```

##### `ResetAllowUserKeyIds` <a name="ResetAllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds"></a>

```go
func ResetAllowUserKeyIds()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList"></a>

```go
func ResetCidrList()
```

##### `ResetDefaultCriticalOptions` <a name="ResetDefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions"></a>

```go
func ResetDefaultCriticalOptions()
```

##### `ResetDefaultExtensions` <a name="ResetDefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions"></a>

```go
func ResetDefaultExtensions()
```

##### `ResetDefaultUser` <a name="ResetDefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser"></a>

```go
func ResetDefaultUser()
```

##### `ResetDefaultUserTemplate` <a name="ResetDefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate"></a>

```go
func ResetDefaultUserTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyIdFormat` <a name="ResetKeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat"></a>

```go
func ResetKeyIdFormat()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.SshSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.SshSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.SshSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig">AllowedUserKeyConfig</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput">AlgorithmSignerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput">AllowBareDomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput">AllowedCriticalOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput">AllowedDomainsTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput">AllowedExtensionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput">AllowedUserKeyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput">AllowedUserKeyLengthsInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput">AllowedUsersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput">AllowedUsersTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput">AllowHostCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput">AllowSubdomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput">AllowUserCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput">AllowUserKeyIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput">CidrListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput">DefaultCriticalOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput">DefaultExtensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput">DefaultUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput">DefaultUserTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput">KeyIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner">AlgorithmSigner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains">AllowBareDomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions">AllowedCriticalOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions">AllowedExtensions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths">AllowedUserKeyLengths</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers">AllowedUsers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate">AllowedUsersTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates">AllowHostCertificates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains">AllowSubdomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates">AllowUserCertificates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds">AllowUserKeyIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList">CidrList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions">DefaultCriticalOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions">DefaultExtensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser">DefaultUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate">DefaultUserTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat">KeyIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedUserKeyConfig`<sup>Required</sup> <a name="AllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig"></a>

```go
func AllowedUserKeyConfig() SshSecretBackendRoleAllowedUserKeyConfigList
```

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a>

---

##### `AlgorithmSignerInput`<sup>Optional</sup> <a name="AlgorithmSignerInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput"></a>

```go
func AlgorithmSignerInput() *string
```

- *Type:* *string

---

##### `AllowBareDomainsInput`<sup>Optional</sup> <a name="AllowBareDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput"></a>

```go
func AllowBareDomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedCriticalOptionsInput`<sup>Optional</sup> <a name="AllowedCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput"></a>

```go
func AllowedCriticalOptionsInput() *string
```

- *Type:* *string

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput"></a>

```go
func AllowedDomainsInput() *string
```

- *Type:* *string

---

##### `AllowedDomainsTemplateInput`<sup>Optional</sup> <a name="AllowedDomainsTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```go
func AllowedDomainsTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedExtensionsInput`<sup>Optional</sup> <a name="AllowedExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput"></a>

```go
func AllowedExtensionsInput() *string
```

- *Type:* *string

---

##### `AllowedUserKeyConfigInput`<sup>Optional</sup> <a name="AllowedUserKeyConfigInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput"></a>

```go
func AllowedUserKeyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedUserKeyLengthsInput`<sup>Optional</sup> <a name="AllowedUserKeyLengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput"></a>

```go
func AllowedUserKeyLengthsInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `AllowedUsersInput`<sup>Optional</sup> <a name="AllowedUsersInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput"></a>

```go
func AllowedUsersInput() *string
```

- *Type:* *string

---

##### `AllowedUsersTemplateInput`<sup>Optional</sup> <a name="AllowedUsersTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput"></a>

```go
func AllowedUsersTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHostCertificatesInput`<sup>Optional</sup> <a name="AllowHostCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput"></a>

```go
func AllowHostCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSubdomainsInput`<sup>Optional</sup> <a name="AllowSubdomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput"></a>

```go
func AllowSubdomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUserCertificatesInput`<sup>Optional</sup> <a name="AllowUserCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput"></a>

```go
func AllowUserCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUserKeyIdsInput`<sup>Optional</sup> <a name="AllowUserKeyIdsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput"></a>

```go
func AllowUserKeyIdsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput"></a>

```go
func CidrListInput() *string
```

- *Type:* *string

---

##### `DefaultCriticalOptionsInput`<sup>Optional</sup> <a name="DefaultCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput"></a>

```go
func DefaultCriticalOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExtensionsInput`<sup>Optional</sup> <a name="DefaultExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput"></a>

```go
func DefaultExtensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultUserInput`<sup>Optional</sup> <a name="DefaultUserInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput"></a>

```go
func DefaultUserInput() *string
```

- *Type:* *string

---

##### `DefaultUserTemplateInput`<sup>Optional</sup> <a name="DefaultUserTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput"></a>

```go
func DefaultUserTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdFormatInput`<sup>Optional</sup> <a name="KeyIdFormatInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput"></a>

```go
func KeyIdFormatInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `AlgorithmSigner`<sup>Required</sup> <a name="AlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner"></a>

```go
func AlgorithmSigner() *string
```

- *Type:* *string

---

##### `AllowBareDomains`<sup>Required</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains"></a>

```go
func AllowBareDomains() interface{}
```

- *Type:* interface{}

---

##### `AllowedCriticalOptions`<sup>Required</sup> <a name="AllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions"></a>

```go
func AllowedCriticalOptions() *string
```

- *Type:* *string

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains"></a>

```go
func AllowedDomains() *string
```

- *Type:* *string

---

##### `AllowedDomainsTemplate`<sup>Required</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate"></a>

```go
func AllowedDomainsTemplate() interface{}
```

- *Type:* interface{}

---

##### `AllowedExtensions`<sup>Required</sup> <a name="AllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions"></a>

```go
func AllowedExtensions() *string
```

- *Type:* *string

---

##### `AllowedUserKeyLengths`<sup>Required</sup> <a name="AllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths"></a>

```go
func AllowedUserKeyLengths() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `AllowedUsers`<sup>Required</sup> <a name="AllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers"></a>

```go
func AllowedUsers() *string
```

- *Type:* *string

---

##### `AllowedUsersTemplate`<sup>Required</sup> <a name="AllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate"></a>

```go
func AllowedUsersTemplate() interface{}
```

- *Type:* interface{}

---

##### `AllowHostCertificates`<sup>Required</sup> <a name="AllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates"></a>

```go
func AllowHostCertificates() interface{}
```

- *Type:* interface{}

---

##### `AllowSubdomains`<sup>Required</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains"></a>

```go
func AllowSubdomains() interface{}
```

- *Type:* interface{}

---

##### `AllowUserCertificates`<sup>Required</sup> <a name="AllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates"></a>

```go
func AllowUserCertificates() interface{}
```

- *Type:* interface{}

---

##### `AllowUserKeyIds`<sup>Required</sup> <a name="AllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds"></a>

```go
func AllowUserKeyIds() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList"></a>

```go
func CidrList() *string
```

- *Type:* *string

---

##### `DefaultCriticalOptions`<sup>Required</sup> <a name="DefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions"></a>

```go
func DefaultCriticalOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExtensions`<sup>Required</sup> <a name="DefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions"></a>

```go
func DefaultExtensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultUser`<sup>Required</sup> <a name="DefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser"></a>

```go
func DefaultUser() *string
```

- *Type:* *string

---

##### `DefaultUserTemplate`<sup>Required</sup> <a name="DefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate"></a>

```go
func DefaultUserTemplate() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyIdFormat`<sup>Required</sup> <a name="KeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat"></a>

```go
func KeyIdFormat() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendRoleAllowedUserKeyConfig <a name="SshSecretBackendRoleAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

&sshsecretbackendrole.SshSecretBackendRoleAllowedUserKeyConfig {
	Lengths: *[]*f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths">Lengths</a></code> | <code>*[]*f64</code> | List of allowed key lengths, vault-1.10 and above. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type">Type</a></code> | <code>*string</code> | Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521. |

---

##### `Lengths`<sup>Required</sup> <a name="Lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths"></a>

```go
Lengths *[]*f64
```

- *Type:* *[]*f64

List of allowed key lengths, vault-1.10 and above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#type SshSecretBackendRole#type}

---

### SshSecretBackendRoleConfig <a name="SshSecretBackendRoleConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

&sshsecretbackendrole.SshSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	KeyType: *string,
	Name: *string,
	AlgorithmSigner: *string,
	AllowBareDomains: interface{},
	AllowedCriticalOptions: *string,
	AllowedDomains: *string,
	AllowedDomainsTemplate: interface{},
	AllowedExtensions: *string,
	AllowedUserKeyConfig: interface{},
	AllowedUserKeyLengths: *map[string]*f64,
	AllowedUsers: *string,
	AllowedUsersTemplate: interface{},
	AllowHostCertificates: interface{},
	AllowSubdomains: interface{},
	AllowUserCertificates: interface{},
	AllowUserKeyIds: interface{},
	CidrList: *string,
	DefaultCriticalOptions: *map[string]*string,
	DefaultExtensions: *map[string]*string,
	DefaultUser: *string,
	DefaultUserTemplate: interface{},
	Id: *string,
	KeyIdFormat: *string,
	MaxTtl: *string,
	Namespace: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner">AlgorithmSigner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains">AllowBareDomains</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions">AllowedCriticalOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate">AllowedDomainsTemplate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions">AllowedExtensions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig">AllowedUserKeyConfig</a></code> | <code>interface{}</code> | allowed_user_key_config block. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths">AllowedUserKeyLengths</a></code> | <code>*map[string]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers">AllowedUsers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate">AllowedUsersTemplate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates">AllowHostCertificates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains">AllowSubdomains</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates">AllowUserCertificates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds">AllowUserKeyIds</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList">CidrList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions">DefaultCriticalOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions">DefaultExtensions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser">DefaultUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate">DefaultUserTemplate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat">KeyIdFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `AlgorithmSigner`<sup>Optional</sup> <a name="AlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner"></a>

```go
AlgorithmSigner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `AllowBareDomains`<sup>Optional</sup> <a name="AllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains"></a>

```go
AllowBareDomains interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `AllowedCriticalOptions`<sup>Optional</sup> <a name="AllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions"></a>

```go
AllowedCriticalOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains"></a>

```go
AllowedDomains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `AllowedDomainsTemplate`<sup>Optional</sup> <a name="AllowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```go
AllowedDomainsTemplate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}.

---

##### `AllowedExtensions`<sup>Optional</sup> <a name="AllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions"></a>

```go
AllowedExtensions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `AllowedUserKeyConfig`<sup>Optional</sup> <a name="AllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig"></a>

```go
AllowedUserKeyConfig interface{}
```

- *Type:* interface{}

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `AllowedUserKeyLengths`<sup>Optional</sup> <a name="AllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths"></a>

```go
AllowedUserKeyLengths *map[string]*f64
```

- *Type:* *map[string]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}.

---

##### `AllowedUsers`<sup>Optional</sup> <a name="AllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers"></a>

```go
AllowedUsers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `AllowedUsersTemplate`<sup>Optional</sup> <a name="AllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate"></a>

```go
AllowedUsersTemplate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `AllowHostCertificates`<sup>Optional</sup> <a name="AllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates"></a>

```go
AllowHostCertificates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `AllowSubdomains`<sup>Optional</sup> <a name="AllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains"></a>

```go
AllowSubdomains interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `AllowUserCertificates`<sup>Optional</sup> <a name="AllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates"></a>

```go
AllowUserCertificates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `AllowUserKeyIds`<sup>Optional</sup> <a name="AllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds"></a>

```go
AllowUserKeyIds interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList"></a>

```go
CidrList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `DefaultCriticalOptions`<sup>Optional</sup> <a name="DefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions"></a>

```go
DefaultCriticalOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `DefaultExtensions`<sup>Optional</sup> <a name="DefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions"></a>

```go
DefaultExtensions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}.

---

##### `DefaultUser`<sup>Optional</sup> <a name="DefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser"></a>

```go
DefaultUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `DefaultUserTemplate`<sup>Optional</sup> <a name="DefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate"></a>

```go
DefaultUserTemplate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyIdFormat`<sup>Optional</sup> <a name="KeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat"></a>

```go
KeyIdFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### SshSecretBackendRoleAllowedUserKeyConfigList <a name="SshSecretBackendRoleAllowedUserKeyConfigList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.NewSshSecretBackendRoleAllowedUserKeyConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SshSecretBackendRoleAllowedUserKeyConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get"></a>

```go
func Get(index *f64) SshSecretBackendRoleAllowedUserKeyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SshSecretBackendRoleAllowedUserKeyConfigOutputReference <a name="SshSecretBackendRoleAllowedUserKeyConfigOutputReference" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/sshsecretbackendrole"

sshsecretbackendrole.NewSshSecretBackendRoleAllowedUserKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SshSecretBackendRoleAllowedUserKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput">LengthsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths">Lengths</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LengthsInput`<sup>Optional</sup> <a name="LengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput"></a>

```go
func LengthsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Lengths`<sup>Required</sup> <a name="Lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths"></a>

```go
func Lengths() *[]*f64
```

- *Type:* *[]*f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



