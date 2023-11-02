# `vault_generic_endpoint`

Refer to the Terraform Registory for docs: [`vault_generic_endpoint`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint).

# `genericEndpoint` Submodule <a name="`genericEndpoint` Submodule" id="@cdktf/provider-vault.genericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericEndpoint <a name="GenericEndpoint" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

genericendpoint.NewGenericEndpoint(scope Construct, id *string, config GenericEndpointConfig) GenericEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig">GenericEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig">GenericEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete">ResetDisableDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead">ResetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields">ResetIgnoreAbsentFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields">ResetWriteFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDisableDelete` <a name="ResetDisableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete"></a>

```go
func ResetDisableDelete()
```

##### `ResetDisableRead` <a name="ResetDisableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead"></a>

```go
func ResetDisableRead()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreAbsentFields` <a name="ResetIgnoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields"></a>

```go
func ResetIgnoreAbsentFields()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetWriteFields` <a name="ResetWriteFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields"></a>

```go
func ResetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenericEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

genericendpoint.GenericEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

genericendpoint.GenericEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

genericendpoint.GenericEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

genericendpoint.GenericEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenericEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenericEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenericEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenericEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData">WriteData</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson">WriteDataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput">DataJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput">DisableDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput">DisableReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput">IgnoreAbsentFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput">WriteFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson">DataJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete">DisableDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead">DisableRead</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields">IgnoreAbsentFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields">WriteFields</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WriteData`<sup>Required</sup> <a name="WriteData" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData"></a>

```go
func WriteData() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `WriteDataJson`<sup>Required</sup> <a name="WriteDataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson"></a>

```go
func WriteDataJson() *string
```

- *Type:* *string

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput"></a>

```go
func DataJsonInput() *string
```

- *Type:* *string

---

##### `DisableDeleteInput`<sup>Optional</sup> <a name="DisableDeleteInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput"></a>

```go
func DisableDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DisableReadInput`<sup>Optional</sup> <a name="DisableReadInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput"></a>

```go
func DisableReadInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreAbsentFieldsInput`<sup>Optional</sup> <a name="IgnoreAbsentFieldsInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput"></a>

```go
func IgnoreAbsentFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `WriteFieldsInput`<sup>Optional</sup> <a name="WriteFieldsInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput"></a>

```go
func WriteFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson"></a>

```go
func DataJson() *string
```

- *Type:* *string

---

##### `DisableDelete`<sup>Required</sup> <a name="DisableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete"></a>

```go
func DisableDelete() interface{}
```

- *Type:* interface{}

---

##### `DisableRead`<sup>Required</sup> <a name="DisableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead"></a>

```go
func DisableRead() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreAbsentFields`<sup>Required</sup> <a name="IgnoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields"></a>

```go
func IgnoreAbsentFields() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `WriteFields`<sup>Required</sup> <a name="WriteFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields"></a>

```go
func WriteFields() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenericEndpointConfig <a name="GenericEndpointConfig" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-vault-go/vault/genericendpoint"

&genericendpoint.GenericEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataJson: *string,
	Path: *string,
	DisableDelete: interface{},
	DisableRead: interface{},
	Id: *string,
	IgnoreAbsentFields: interface{},
	Namespace: *string,
	WriteFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson">DataJson</a></code> | <code>*string</code> | JSON-encoded data to write. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path">Path</a></code> | <code>*string</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete">DisableDelete</a></code> | <code>interface{}</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead">DisableRead</a></code> | <code>interface{}</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields">IgnoreAbsentFields</a></code> | <code>interface{}</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields">WriteFields</a></code> | <code>*[]*string</code> | Top-level fields returned by write to persist in state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson"></a>

```go
DataJson *string
```

- *Type:* *string

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `DisableDelete`<sup>Optional</sup> <a name="DisableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete"></a>

```go
DisableDelete interface{}
```

- *Type:* interface{}

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `DisableRead`<sup>Optional</sup> <a name="DisableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead"></a>

```go
DisableRead interface{}
```

- *Type:* interface{}

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAbsentFields`<sup>Optional</sup> <a name="IgnoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields"></a>

```go
IgnoreAbsentFields interface{}
```

- *Type:* interface{}

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `WriteFields`<sup>Optional</sup> <a name="WriteFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields"></a>

```go
WriteFields *[]*string
```

- *Type:* *[]*string

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---



