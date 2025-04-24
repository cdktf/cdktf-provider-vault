# `dataVaultTransitVerify` Submodule <a name="`dataVaultTransitVerify` Submodule" id="@cdktf/provider-vault.dataVaultTransitVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitVerify <a name="DataVaultTransitVerify" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify vault_transit_verify}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

new dataVaultTransitVerify.DataVaultTransitVerify(scope: Construct, id: string, config: DataVaultTransitVerifyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig">DataVaultTransitVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac">resetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac">resetHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm">resetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed">resetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength">resetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext">resetSignatureContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid">resetValid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput"></a>

```typescript
public resetBatchInput(): void
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults"></a>

```typescript
public resetBatchResults(): void
```

##### `resetCmac` <a name="resetCmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac"></a>

```typescript
public resetCmac(): void
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm"></a>

```typescript
public resetHashAlgorithm(): void
```

##### `resetHmac` <a name="resetHmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac"></a>

```typescript
public resetHmac(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetMarshalingAlgorithm` <a name="resetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm"></a>

```typescript
public resetMarshalingAlgorithm(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPrehashed` <a name="resetPrehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed"></a>

```typescript
public resetPrehashed(): void
```

##### `resetReference` <a name="resetReference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference"></a>

```typescript
public resetReference(): void
```

##### `resetSaltLength` <a name="resetSaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength"></a>

```typescript
public resetSaltLength(): void
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature"></a>

```typescript
public resetSignature(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

##### `resetSignatureContext` <a name="resetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext"></a>

```typescript
public resetSignatureContext(): void
```

##### `resetValid` <a name="resetValid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid"></a>

```typescript
public resetValid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

dataVaultTransitVerify.DataVaultTransitVerify.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitVerify to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput">batchInputInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput">batchResultsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput">cmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput">hmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput">marshalingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput">prehashedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput">referenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput">saltLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput">signatureContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput">validInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac">cmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac">hmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed">prehashed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference">reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength">saltLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext">signatureContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid">valid</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput"></a>

```typescript
public readonly batchInputInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput"></a>

```typescript
public readonly batchResultsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `cmacInput`<sup>Optional</sup> <a name="cmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput"></a>

```typescript
public readonly cmacInput: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput"></a>

```typescript
public readonly hashAlgorithmInput: string;
```

- *Type:* string

---

##### `hmacInput`<sup>Optional</sup> <a name="hmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput"></a>

```typescript
public readonly hmacInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `marshalingAlgorithmInput`<sup>Optional</sup> <a name="marshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput"></a>

```typescript
public readonly marshalingAlgorithmInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `prehashedInput`<sup>Optional</sup> <a name="prehashedInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput"></a>

```typescript
public readonly prehashedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput"></a>

```typescript
public readonly referenceInput: string;
```

- *Type:* string

---

##### `saltLengthInput`<sup>Optional</sup> <a name="saltLengthInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput"></a>

```typescript
public readonly saltLengthInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `signatureContextInput`<sup>Optional</sup> <a name="signatureContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput"></a>

```typescript
public readonly signatureContextInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `validInput`<sup>Optional</sup> <a name="validInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput"></a>

```typescript
public readonly validInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `cmac`<sup>Required</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac"></a>

```typescript
public readonly cmac: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `hmac`<sup>Required</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac"></a>

```typescript
public readonly hmac: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `marshalingAlgorithm`<sup>Required</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm"></a>

```typescript
public readonly marshalingAlgorithm: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `prehashed`<sup>Required</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed"></a>

```typescript
public readonly prehashed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---

##### `saltLength`<sup>Required</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength"></a>

```typescript
public readonly saltLength: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `signatureContext`<sup>Required</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext"></a>

```typescript
public readonly signatureContext: string;
```

- *Type:* string

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid"></a>

```typescript
public readonly valid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitVerifyConfig <a name="DataVaultTransitVerifyConfig" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.Initializer"></a>

```typescript
import { dataVaultTransitVerify } from '@cdktf/provider-vault'

const dataVaultTransitVerifyConfig: dataVaultTransitVerify.DataVaultTransitVerifyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path">path</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput">batchInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults">batchResults</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac">cmac</a></code> | <code>string</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context">context</a></code> | <code>string</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac">hmac</a></code> | <code>string</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input">input</a></code> | <code>string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>string</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed">prehashed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference">reference</a></code> | <code>string</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength">saltLength</a></code> | <code>string</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature">signature</a></code> | <code>string</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext">signatureContext</a></code> | <code>string</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid">valid</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether verification succeeded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac"></a>

```typescript
public readonly cmac: string;
```

- *Type:* string

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `hmac`<sup>Optional</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac"></a>

```typescript
public readonly hmac: string;
```

- *Type:* string

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `marshalingAlgorithm`<sup>Optional</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm"></a>

```typescript
public readonly marshalingAlgorithm: string;
```

- *Type:* string

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed"></a>

```typescript
public readonly prehashed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `saltLength`<sup>Optional</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength"></a>

```typescript
public readonly saltLength: string;
```

- *Type:* string

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `signatureContext`<sup>Optional</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext"></a>

```typescript
public readonly signatureContext: string;
```

- *Type:* string

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `valid`<sup>Optional</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid"></a>

```typescript
public readonly valid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---



