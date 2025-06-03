# `dataVaultApproleAuthBackendRoleId` Submodule <a name="`dataVaultApproleAuthBackendRoleId` Submodule" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultApproleAuthBackendRoleId <a name="DataVaultApproleAuthBackendRoleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id vault_approle_auth_backend_role_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

new dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId(scope: Construct, id: string, config: DataVaultApproleAuthBackendRoleIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig">DataVaultApproleAuthBackendRoleIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultApproleAuthBackendRoleId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultApproleAuthBackendRoleId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultApproleAuthBackendRoleId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultApproleAuthBackendRoleId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultApproleAuthBackendRoleIdConfig <a name="DataVaultApproleAuthBackendRoleIdConfig" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.Initializer"></a>

```typescript
import { dataVaultApproleAuthBackendRoleId } from '@cdktf/provider-vault'

const dataVaultApproleAuthBackendRoleIdConfig: dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#role_name DataVaultApproleAuthBackendRoleId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#backend DataVaultApproleAuthBackendRoleId#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#id DataVaultApproleAuthBackendRoleId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultApproleAuthBackendRoleId.DataVaultApproleAuthBackendRoleIdConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/approle_auth_backend_role_id#namespace DataVaultApproleAuthBackendRoleId#namespace}

---



