# `dataVaultKvSecretSubkeysV2` Submodule <a name="`dataVaultKvSecretSubkeysV2` Submodule" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKvSecretSubkeysV2 <a name="DataVaultKvSecretSubkeysV2" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2 vault_kv_secret_subkeys_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

new dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2(scope: Construct, id: string, config: DataVaultKvSecretSubkeysV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config">DataVaultKvSecretSubkeysV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config">DataVaultKvSecretSubkeysV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetDepth">resetDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDepth` <a name="resetDepth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetDepth"></a>

```typescript
public resetDepth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultKvSecretSubkeysV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultKvSecretSubkeysV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultKvSecretSubkeysV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultKvSecretSubkeysV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKvSecretSubkeysV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dataJson">dataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depthInput">depthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depth">depth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `depthInput`<sup>Optional</sup> <a name="depthInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depthInput"></a>

```typescript
public readonly depthInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `depth`<sup>Required</sup> <a name="depth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKvSecretSubkeysV2Config <a name="DataVaultKvSecretSubkeysV2Config" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.Initializer"></a>

```typescript
import { dataVaultKvSecretSubkeysV2 } from '@cdktf/provider-vault'

const dataVaultKvSecretSubkeysV2Config: dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.mount">mount</a></code> | <code>string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.name">name</a></code> | <code>string</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.depth">depth</a></code> | <code>number</code> | Specifies the deepest nesting level to provide in the output.If non-zero, keys that reside at the specified depth value will be artificially treated as leaves and will thus be 'null' even if further underlying sub-keys exist. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#id DataVaultKvSecretSubkeysV2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.version">version</a></code> | <code>number</code> | Specifies the version to return. If not set the latest version is returned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#mount DataVaultKvSecretSubkeysV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#name DataVaultKvSecretSubkeysV2#name}

---

##### `depth`<sup>Optional</sup> <a name="depth" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.depth"></a>

```typescript
public readonly depth: number;
```

- *Type:* number

Specifies the deepest nesting level to provide in the output.If non-zero, keys that reside at the specified depth value will be artificially treated as leaves and will thus be 'null' even if further underlying sub-keys exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#depth DataVaultKvSecretSubkeysV2#depth}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#id DataVaultKvSecretSubkeysV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#namespace DataVaultKvSecretSubkeysV2#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-vault.dataVaultKvSecretSubkeysV2.DataVaultKvSecretSubkeysV2Config.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Specifies the version to return. If not set the latest version is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/kv_secret_subkeys_v2#version DataVaultKvSecretSubkeysV2#version}

---



