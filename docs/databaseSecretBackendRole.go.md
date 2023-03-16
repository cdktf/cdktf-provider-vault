# `databaseSecretBackendRole` Submodule <a name="`databaseSecretBackendRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendRole <a name="DatabaseSecretBackendRole" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role vault_database_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/databasesecretbackendrole"

databasesecretbackendrole.NewDatabaseSecretBackendRole(scope Construct, id *string, config DatabaseSecretBackendRoleConfig) DatabaseSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig">DatabaseSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig">DatabaseSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements">ResetRenewStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements">ResetRevocationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements">ResetRollbackStatements</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRenewStatements` <a name="ResetRenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements"></a>

```go
func ResetRenewStatements()
```

##### `ResetRevocationStatements` <a name="ResetRevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements"></a>

```go
func ResetRevocationStatements()
```

##### `ResetRollbackStatements` <a name="ResetRollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements"></a>

```go
func ResetRollbackStatements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/databasesecretbackendrole"

databasesecretbackendrole.DatabaseSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/databasesecretbackendrole"

databasesecretbackendrole.DatabaseSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/databasesecretbackendrole"

databasesecretbackendrole.DatabaseSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput">CreationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput">RenewStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput">RevocationStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput">RollbackStatementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements">CreationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements">RenewStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements">RevocationStatements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements">RollbackStatements</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `CreationStatementsInput`<sup>Optional</sup> <a name="CreationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput"></a>

```go
func CreationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RenewStatementsInput`<sup>Optional</sup> <a name="RenewStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput"></a>

```go
func RenewStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RevocationStatementsInput`<sup>Optional</sup> <a name="RevocationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput"></a>

```go
func RevocationStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RollbackStatementsInput`<sup>Optional</sup> <a name="RollbackStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput"></a>

```go
func RollbackStatementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `CreationStatements`<sup>Required</sup> <a name="CreationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements"></a>

```go
func CreationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RenewStatements`<sup>Required</sup> <a name="RenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements"></a>

```go
func RenewStatements() *[]*string
```

- *Type:* *[]*string

---

##### `RevocationStatements`<sup>Required</sup> <a name="RevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements"></a>

```go
func RevocationStatements() *[]*string
```

- *Type:* *[]*string

---

##### `RollbackStatements`<sup>Required</sup> <a name="RollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements"></a>

```go
func RollbackStatements() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendRoleConfig <a name="DatabaseSecretBackendRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/databasesecretbackendrole"

&databasesecretbackendrole.DatabaseSecretBackendRoleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	CreationStatements: *[]*string,
	DbName: *string,
	Name: *string,
	DefaultTtl: *f64,
	Id: *string,
	MaxTtl: *f64,
	Namespace: *string,
	RenewStatements: *[]*string,
	RevocationStatements: *[]*string,
	RollbackStatements: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>*string</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements">CreationStatements</a></code> | <code>*[]*string</code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName">DbName</a></code> | <code>*string</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements">RenewStatements</a></code> | <code>*[]*string</code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements">RevocationStatements</a></code> | <code>*[]*string</code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements">RollbackStatements</a></code> | <code>*[]*string</code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `CreationStatements`<sup>Required</sup> <a name="CreationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements"></a>

```go
CreationStatements *[]*string
```

- *Type:* *[]*string

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Database connection to use for this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `RenewStatements`<sup>Optional</sup> <a name="RenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements"></a>

```go
RenewStatements *[]*string
```

- *Type:* *[]*string

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `RevocationStatements`<sup>Optional</sup> <a name="RevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements"></a>

```go
RevocationStatements *[]*string
```

- *Type:* *[]*string

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `RollbackStatements`<sup>Optional</sup> <a name="RollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements"></a>

```go
RollbackStatements *[]*string
```

- *Type:* *[]*string

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---



