# `dataVaultTransformEncode` Submodule <a name="`dataVaultTransformEncode` Submodule" id="@cdktf/provider-vault.dataVaultTransformEncode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformEncode <a name="DataVaultTransformEncode" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode vault_transform_encode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

new dataVaultTransformEncode.DataVaultTransformEncode(scope: Construct, id: string, config: DataVaultTransformEncodeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig">DataVaultTransformEncodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig">DataVaultTransformEncodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue">resetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput"></a>

```typescript
public resetBatchInput(): void
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults"></a>

```typescript
public resetBatchResults(): void
```

##### `resetEncodedValue` <a name="resetEncodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue"></a>

```typescript
public resetEncodedValue(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation"></a>

```typescript
public resetTransformation(): void
```

##### `resetTweak` <a name="resetTweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak"></a>

```typescript
public resetTweak(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransformEncode resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

dataVaultTransformEncode.DataVaultTransformEncode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultTransformEncode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransformEncode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransformEncode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransformEncode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput">batchInputInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput">batchResultsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput">encodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput">transformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput">tweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue">encodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation">transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak">tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput"></a>

```typescript
public readonly batchInputInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput"></a>

```typescript
public readonly batchResultsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `encodedValueInput`<sup>Optional</sup> <a name="encodedValueInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput"></a>

```typescript
public readonly encodedValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput"></a>

```typescript
public readonly transformationInput: string;
```

- *Type:* string

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput"></a>

```typescript
public readonly tweakInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `encodedValue`<sup>Required</sup> <a name="encodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue"></a>

```typescript
public readonly encodedValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformEncodeConfig <a name="DataVaultTransformEncodeConfig" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.Initializer"></a>

```typescript
import { dataVaultTransformEncode } from '@cdktf/provider-vault'

const dataVaultTransformEncodeConfig: dataVaultTransformEncode.DataVaultTransformEncodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path">path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName">roleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | The result of encoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue">encodedValue</a></code> | <code>string</code> | The result of encoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation">transformation</a></code> | <code>string</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak">tweak</a></code> | <code>string</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value">value</a></code> | <code>string</code> | The value in which to encode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#path DataVaultTransformEncode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue"></a>

```typescript
public readonly encodedValue: string;
```

- *Type:* string

The result of encoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in which to encode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/data-sources/transform_encode#value DataVaultTransformEncode#value}

---



