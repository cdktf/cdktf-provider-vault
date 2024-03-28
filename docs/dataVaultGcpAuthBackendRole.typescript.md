# `dataVaultGcpAuthBackendRole` Submodule <a name="`dataVaultGcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpAuthBackendRole <a name="DataVaultGcpAuthBackendRole" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

new dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole(scope: Construct, id: string, config: DataVaultGcpAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig">DataVaultGcpAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig">DataVaultGcpAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultGcpAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultGcpAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultGcpAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultGcpAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultGcpAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundInstanceGroups">boundInstanceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundLabels">boundLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundProjects">boundProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundRegions">boundRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundServiceAccounts">boundServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundZones">boundZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `boundInstanceGroups`<sup>Required</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundInstanceGroups"></a>

```typescript
public readonly boundInstanceGroups: string[];
```

- *Type:* string[]

---

##### `boundLabels`<sup>Required</sup> <a name="boundLabels" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundLabels"></a>

```typescript
public readonly boundLabels: string[];
```

- *Type:* string[]

---

##### `boundProjects`<sup>Required</sup> <a name="boundProjects" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundProjects"></a>

```typescript
public readonly boundProjects: string[];
```

- *Type:* string[]

---

##### `boundRegions`<sup>Required</sup> <a name="boundRegions" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundRegions"></a>

```typescript
public readonly boundRegions: string[];
```

- *Type:* string[]

---

##### `boundServiceAccounts`<sup>Required</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundServiceAccounts"></a>

```typescript
public readonly boundServiceAccounts: string[];
```

- *Type:* string[]

---

##### `boundZones`<sup>Required</sup> <a name="boundZones" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.boundZones"></a>

```typescript
public readonly boundZones: string[];
```

- *Type:* string[]

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpAuthBackendRoleConfig <a name="DataVaultGcpAuthBackendRoleConfig" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.Initializer"></a>

```typescript
import { dataVaultGcpAuthBackendRole } from '@cdktf/provider-vault'

const dataVaultGcpAuthBackendRoleConfig: dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#id DataVaultGcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#role_name DataVaultGcpAuthBackendRole#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#backend DataVaultGcpAuthBackendRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#id DataVaultGcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#namespace DataVaultGcpAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_bound_cidrs DataVaultGcpAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_explicit_max_ttl DataVaultGcpAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_max_ttl DataVaultGcpAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_no_default_policy DataVaultGcpAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_num_uses DataVaultGcpAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_period DataVaultGcpAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_policies DataVaultGcpAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_ttl DataVaultGcpAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.dataVaultGcpAuthBackendRole.DataVaultGcpAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/gcp_auth_backend_role#token_type DataVaultGcpAuthBackendRole#token_type}

---



