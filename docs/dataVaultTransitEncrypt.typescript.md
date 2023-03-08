# `dataVaultTransitEncrypt` Submodule <a name="`dataVaultTransitEncrypt` Submodule" id="@cdktf/provider-vault.dataVaultTransitEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitEncrypt <a name="DataVaultTransitEncrypt" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt vault_transit_encrypt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer"></a>

```typescript
import { dataVaultTransitEncrypt } from '@cdktf/provider-vault'

new dataVaultTransitEncrypt.DataVaultTransitEncrypt(scope: Construct, id: string, config: DataVaultTransitEncryptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig">DataVaultTransitEncryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContext` <a name="resetContext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct"></a>

```typescript
import { dataVaultTransitEncrypt } from '@cdktf/provider-vault'

dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement"></a>

```typescript
import { dataVaultTransitEncrypt } from '@cdktf/provider-vault'

dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource"></a>

```typescript
import { dataVaultTransitEncrypt } from '@cdktf/provider-vault'

dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput">keyVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput">plaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion">keyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput"></a>

```typescript
public readonly plaintextInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitEncryptConfig <a name="DataVaultTransitEncryptConfig" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.Initializer"></a>

```typescript
import { dataVaultTransitEncrypt } from '@cdktf/provider-vault'

const dataVaultTransitEncryptConfig: dataVaultTransitEncrypt.DataVaultTransitEncryptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend">backend</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key">key</a></code> | <code>string</code> | Name of the encryption key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext">plaintext</a></code> | <code>string</code> | Map of strings read from Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context">context</a></code> | <code>string</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion">keyVersion</a></code> | <code>number</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---


