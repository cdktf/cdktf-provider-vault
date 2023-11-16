# `vault_database_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_database_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role).

# `databaseSecretBackendRole` Submodule <a name="`databaseSecretBackendRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendRole <a name="DatabaseSecretBackendRole" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretBackendRole(Construct Scope, string Id, DatabaseSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig">DatabaseSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig">ResetCredentialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements">ResetRenewStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements">ResetRevocationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements">ResetRollbackStatements</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCredentialConfig` <a name="ResetCredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig"></a>

```csharp
private void ResetCredentialConfig()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRenewStatements` <a name="ResetRenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements"></a>

```csharp
private void ResetRenewStatements()
```

##### `ResetRevocationStatements` <a name="ResetRevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements"></a>

```csharp
private void ResetRevocationStatements()
```

##### `ResetRollbackStatements` <a name="ResetRollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements"></a>

```csharp
private void ResetRollbackStatements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

DatabaseSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput">CreationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput">CredentialConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput">RenewStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput">RevocationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput">RollbackStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements">CreationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig">CredentialConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements">RenewStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements">RevocationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements">RollbackStatements</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CreationStatementsInput`<sup>Optional</sup> <a name="CreationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput"></a>

```csharp
public string[] CreationStatementsInput { get; }
```

- *Type:* string[]

---

##### `CredentialConfigInput`<sup>Optional</sup> <a name="CredentialConfigInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RenewStatementsInput`<sup>Optional</sup> <a name="RenewStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput"></a>

```csharp
public string[] RenewStatementsInput { get; }
```

- *Type:* string[]

---

##### `RevocationStatementsInput`<sup>Optional</sup> <a name="RevocationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput"></a>

```csharp
public string[] RevocationStatementsInput { get; }
```

- *Type:* string[]

---

##### `RollbackStatementsInput`<sup>Optional</sup> <a name="RollbackStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput"></a>

```csharp
public string[] RollbackStatementsInput { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CreationStatements`<sup>Required</sup> <a name="CreationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements"></a>

```csharp
public string[] CreationStatements { get; }
```

- *Type:* string[]

---

##### `CredentialConfig`<sup>Required</sup> <a name="CredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RenewStatements`<sup>Required</sup> <a name="RenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements"></a>

```csharp
public string[] RenewStatements { get; }
```

- *Type:* string[]

---

##### `RevocationStatements`<sup>Required</sup> <a name="RevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements"></a>

```csharp
public string[] RevocationStatements { get; }
```

- *Type:* string[]

---

##### `RollbackStatements`<sup>Required</sup> <a name="RollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements"></a>

```csharp
public string[] RollbackStatements { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendRoleConfig <a name="DatabaseSecretBackendRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vault;

new DatabaseSecretBackendRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string[] CreationStatements,
    string DbName,
    string Name,
    System.Collections.Generic.IDictionary<string, string> CredentialConfig = null,
    string CredentialType = null,
    double DefaultTtl = null,
    string Id = null,
    double MaxTtl = null,
    string Namespace = null,
    string[] RenewStatements = null,
    string[] RevocationStatements = null,
    string[] RollbackStatements = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements">CreationStatements</a></code> | <code>string[]</code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName">DbName</a></code> | <code>string</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig">CredentialConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType">CredentialType</a></code> | <code>string</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements">RenewStatements</a></code> | <code>string[]</code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements">RevocationStatements</a></code> | <code>string[]</code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements">RollbackStatements</a></code> | <code>string[]</code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `CreationStatements`<sup>Required</sup> <a name="CreationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements"></a>

```csharp
public string[] CreationStatements { get; set; }
```

- *Type:* string[]

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `CredentialConfig`<sup>Optional</sup> <a name="CredentialConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `RenewStatements`<sup>Optional</sup> <a name="RenewStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements"></a>

```csharp
public string[] RenewStatements { get; set; }
```

- *Type:* string[]

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `RevocationStatements`<sup>Optional</sup> <a name="RevocationStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements"></a>

```csharp
public string[] RevocationStatements { get; set; }
```

- *Type:* string[]

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `RollbackStatements`<sup>Optional</sup> <a name="RollbackStatements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements"></a>

```csharp
public string[] RollbackStatements { get; set; }
```

- *Type:* string[]

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---



