# `data_vault_transform_decode`

Refer to the Terraform Registory for docs: [`data_vault_transform_decode`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode).

# `dataVaultTransformDecode` Submodule <a name="`dataVaultTransformDecode` Submodule" id="@cdktf/provider-vault.dataVaultTransformDecode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformDecode <a name="DataVaultTransformDecode" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode vault_transform_decode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer"></a>

```typescript
import { dataVaultTransformDecode } from '@cdktf/provider-vault'

new dataVaultTransformDecode.DataVaultTransformDecode(scope: Construct, id: string, config: DataVaultTransformDecodeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig">DataVaultTransformDecodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue">resetDecodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput"></a>

```typescript
public resetBatchInput(): void
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults"></a>

```typescript
public resetBatchResults(): void
```

##### `resetDecodedValue` <a name="resetDecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue"></a>

```typescript
public resetDecodedValue(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation"></a>

```typescript
public resetTransformation(): void
```

##### `resetTweak` <a name="resetTweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak"></a>

```typescript
public resetTweak(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct"></a>

```typescript
import { dataVaultTransformDecode } from '@cdktf/provider-vault'

dataVaultTransformDecode.DataVaultTransformDecode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement"></a>

```typescript
import { dataVaultTransformDecode } from '@cdktf/provider-vault'

dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource"></a>

```typescript
import { dataVaultTransformDecode } from '@cdktf/provider-vault'

dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput">batchInputInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput">batchResultsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput">decodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput">transformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput">tweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue">decodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation">transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak">tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput"></a>

```typescript
public readonly batchInputInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput"></a>

```typescript
public readonly batchResultsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `decodedValueInput`<sup>Optional</sup> <a name="decodedValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput"></a>

```typescript
public readonly decodedValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput"></a>

```typescript
public readonly transformationInput: string;
```

- *Type:* string

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput"></a>

```typescript
public readonly tweakInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `decodedValue`<sup>Required</sup> <a name="decodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue"></a>

```typescript
public readonly decodedValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformDecodeConfig <a name="DataVaultTransformDecodeConfig" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.Initializer"></a>

```typescript
import { dataVaultTransformDecode } from '@cdktf/provider-vault'

const dataVaultTransformDecodeConfig: dataVaultTransformDecode.DataVaultTransformDecodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path">path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName">roleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | The result of decoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue">decodedValue</a></code> | <code>string</code> | The result of decoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation">transformation</a></code> | <code>string</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak">tweak</a></code> | <code>string</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value">value</a></code> | <code>string</code> | The value in which to decode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `decodedValue`<sup>Optional</sup> <a name="decodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue"></a>

```typescript
public readonly decodedValue: string;
```

- *Type:* string

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---



