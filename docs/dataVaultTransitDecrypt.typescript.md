# `dataVaultTransitDecrypt` Submodule <a name="`dataVaultTransitDecrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitDecrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitDecrypt <a name="DataVaultTransitDecrypt" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt vault_transit_decrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

new dataVaultTransitDecrypt.DataVaultTransitDecrypt(scope: Construct, id: string, config: DataVaultTransitDecryptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig">DataVaultTransitDecryptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig">DataVaultTransitDecryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContext` <a name="resetContext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitDecrypt resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultTransitDecrypt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitDecrypt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitDecrypt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitDecrypt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertextInput">ciphertextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertextInput"></a>

```typescript
public readonly ciphertextInput: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecrypt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitDecryptConfig <a name="DataVaultTransitDecryptConfig" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.Initializer"></a>

```typescript
import { dataVaultTransitDecrypt } from '@cdktf/provider-vault'

const dataVaultTransitDecryptConfig: dataVaultTransitDecrypt.DataVaultTransitDecryptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.backend">backend</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.ciphertext">ciphertext</a></code> | <code>string</code> | Transit encrypted cipher text. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.key">key</a></code> | <code>string</code> | Name of the decryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.context">context</a></code> | <code>string</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#id DataVaultTransitDecrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#backend DataVaultTransitDecrypt#backend}

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

Transit encrypted cipher text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#ciphertext DataVaultTransitDecrypt#ciphertext}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the decryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#key DataVaultTransitDecrypt#key}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#context DataVaultTransitDecrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#id DataVaultTransitDecrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitDecrypt.DataVaultTransitDecryptConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/transit_decrypt#namespace DataVaultTransitDecrypt#namespace}

---



