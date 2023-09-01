# `vault_identity_mfa_login_enforcement`

Refer to the Terraform Registory for docs: [`vault_identity_mfa_login_enforcement`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement).

# `identityMfaLoginEnforcement` Submodule <a name="`identityMfaLoginEnforcement` Submodule" id="@cdktf/provider-vault.identityMfaLoginEnforcement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaLoginEnforcement <a name="IdentityMfaLoginEnforcement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitymfaloginenforcement"

identitymfaloginenforcement.NewIdentityMfaLoginEnforcement(scope Construct, id *string, config IdentityMfaLoginEnforcementConfig) IdentityMfaLoginEnforcement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors">ResetAuthMethodAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes">ResetAuthMethodTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds">ResetIdentityEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds">ResetIdentityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthMethodAccessors` <a name="ResetAuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors"></a>

```go
func ResetAuthMethodAccessors()
```

##### `ResetAuthMethodTypes` <a name="ResetAuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes"></a>

```go
func ResetAuthMethodTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityEntityIds` <a name="ResetIdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds"></a>

```go
func ResetIdentityEntityIds()
```

##### `ResetIdentityGroupIds` <a name="ResetIdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds"></a>

```go
func ResetIdentityGroupIds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitymfaloginenforcement"

identitymfaloginenforcement.IdentityMfaLoginEnforcement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitymfaloginenforcement"

identitymfaloginenforcement.IdentityMfaLoginEnforcement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitymfaloginenforcement"

identitymfaloginenforcement.IdentityMfaLoginEnforcement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput">AuthMethodAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput">AuthMethodTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput">IdentityEntityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput">IdentityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput">MfaMethodIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors">AuthMethodAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes">AuthMethodTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds">IdentityEntityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds">IdentityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds">MfaMethodIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AuthMethodAccessorsInput`<sup>Optional</sup> <a name="AuthMethodAccessorsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput"></a>

```go
func AuthMethodAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthMethodTypesInput`<sup>Optional</sup> <a name="AuthMethodTypesInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput"></a>

```go
func AuthMethodTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityEntityIdsInput`<sup>Optional</sup> <a name="IdentityEntityIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput"></a>

```go
func IdentityEntityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityGroupIdsInput`<sup>Optional</sup> <a name="IdentityGroupIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput"></a>

```go
func IdentityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaMethodIdsInput`<sup>Optional</sup> <a name="MfaMethodIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput"></a>

```go
func MfaMethodIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AuthMethodAccessors`<sup>Required</sup> <a name="AuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors"></a>

```go
func AuthMethodAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `AuthMethodTypes`<sup>Required</sup> <a name="AuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes"></a>

```go
func AuthMethodTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityEntityIds`<sup>Required</sup> <a name="IdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds"></a>

```go
func IdentityEntityIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityGroupIds`<sup>Required</sup> <a name="IdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds"></a>

```go
func IdentityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `MfaMethodIds`<sup>Required</sup> <a name="MfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds"></a>

```go
func MfaMethodIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaLoginEnforcementConfig <a name="IdentityMfaLoginEnforcementConfig" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/identitymfaloginenforcement"

&identitymfaloginenforcement.IdentityMfaLoginEnforcementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MfaMethodIds: *[]*string,
	Name: *string,
	AuthMethodAccessors: *[]*string,
	AuthMethodTypes: *[]*string,
	Id: *string,
	IdentityEntityIds: *[]*string,
	IdentityGroupIds: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds">MfaMethodIds</a></code> | <code>*[]*string</code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name">Name</a></code> | <code>*string</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors">AuthMethodAccessors</a></code> | <code>*[]*string</code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes">AuthMethodTypes</a></code> | <code>*[]*string</code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds">IdentityEntityIds</a></code> | <code>*[]*string</code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds">IdentityGroupIds</a></code> | <code>*[]*string</code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MfaMethodIds`<sup>Required</sup> <a name="MfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds"></a>

```go
MfaMethodIds *[]*string
```

- *Type:* *[]*string

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `AuthMethodAccessors`<sup>Optional</sup> <a name="AuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors"></a>

```go
AuthMethodAccessors *[]*string
```

- *Type:* *[]*string

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `AuthMethodTypes`<sup>Optional</sup> <a name="AuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes"></a>

```go
AuthMethodTypes *[]*string
```

- *Type:* *[]*string

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityEntityIds`<sup>Optional</sup> <a name="IdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds"></a>

```go
IdentityEntityIds *[]*string
```

- *Type:* *[]*string

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `IdentityGroupIds`<sup>Optional</sup> <a name="IdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds"></a>

```go
IdentityGroupIds *[]*string
```

- *Type:* *[]*string

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---



