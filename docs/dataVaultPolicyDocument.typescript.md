# `data_vault_policy_document`

Refer to the Terraform Registory for docs: [`data_vault_policy_document`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document).

# `dataVaultPolicyDocument` Submodule <a name="`dataVaultPolicyDocument` Submodule" id="@cdktf/provider-vault.dataVaultPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPolicyDocument <a name="DataVaultPolicyDocument" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document vault_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocument(scope: Construct, id: string, config?: DataVaultPolicyDocumentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig">DataVaultPolicyDocumentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig">DataVaultPolicyDocumentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule"></a>

```typescript
public putRule(value: IResolvable | DataVaultPolicyDocumentRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl">hcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl"></a>

```typescript
public readonly hcl: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule"></a>

```typescript
public readonly rule: DataVaultPolicyDocumentRuleList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | DataVaultPolicyDocumentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPolicyDocumentConfig <a name="DataVaultPolicyDocumentConfig" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

const dataVaultPolicyDocumentConfig: dataVaultPolicyDocument.DataVaultPolicyDocumentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | DataVaultPolicyDocumentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

### DataVaultPolicyDocumentRule <a name="DataVaultPolicyDocumentRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

const dataVaultPolicyDocumentRule: dataVaultPolicyDocument.DataVaultPolicyDocumentRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter">allowedParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]</code> | allowed_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter">deniedParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]</code> | denied_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl">maxWrappingTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl">minWrappingTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters">requiredParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}. |

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}.

---

##### `allowedParameter`<sup>Optional</sup> <a name="allowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter"></a>

```typescript
public readonly allowedParameter: IResolvable | DataVaultPolicyDocumentRuleAllowedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]

allowed_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#allowed_parameter DataVaultPolicyDocument#allowed_parameter}

---

##### `deniedParameter`<sup>Optional</sup> <a name="deniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter"></a>

```typescript
public readonly deniedParameter: IResolvable | DataVaultPolicyDocumentRuleDeniedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]

denied_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#denied_parameter DataVaultPolicyDocument#denied_parameter}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}.

---

##### `maxWrappingTtl`<sup>Optional</sup> <a name="maxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl"></a>

```typescript
public readonly maxWrappingTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}.

---

##### `minWrappingTtl`<sup>Optional</sup> <a name="minWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl"></a>

```typescript
public readonly minWrappingTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}.

---

##### `requiredParameters`<sup>Optional</sup> <a name="requiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters"></a>

```typescript
public readonly requiredParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}.

---

### DataVaultPolicyDocumentRuleAllowedParameter <a name="DataVaultPolicyDocumentRuleAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

const dataVaultPolicyDocumentRuleAllowedParameter: dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

### DataVaultPolicyDocumentRuleDeniedParameter <a name="DataVaultPolicyDocumentRuleDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

const dataVaultPolicyDocumentRuleDeniedParameter: dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPolicyDocumentRuleAllowedParameterList <a name="DataVaultPolicyDocumentRuleAllowedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get"></a>

```typescript
public get(index: number): DataVaultPolicyDocumentRuleAllowedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRuleAllowedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]

---


### DataVaultPolicyDocumentRuleAllowedParameterOutputReference <a name="DataVaultPolicyDocumentRuleAllowedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRuleAllowedParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>

---


### DataVaultPolicyDocumentRuleDeniedParameterList <a name="DataVaultPolicyDocumentRuleDeniedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get"></a>

```typescript
public get(index: number): DataVaultPolicyDocumentRuleDeniedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRuleDeniedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]

---


### DataVaultPolicyDocumentRuleDeniedParameterOutputReference <a name="DataVaultPolicyDocumentRuleDeniedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRuleDeniedParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>

---


### DataVaultPolicyDocumentRuleList <a name="DataVaultPolicyDocumentRuleList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get"></a>

```typescript
public get(index: number): DataVaultPolicyDocumentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>[]

---


### DataVaultPolicyDocumentRuleOutputReference <a name="DataVaultPolicyDocumentRuleOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer"></a>

```typescript
import { dataVaultPolicyDocument } from '@cdktf/provider-vault'

new dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter">putAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter">putDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter">resetAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter">resetDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl">resetMaxWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl">resetMinWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters">resetRequiredParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedParameter` <a name="putAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter"></a>

```typescript
public putAllowedParameter(value: IResolvable | DataVaultPolicyDocumentRuleAllowedParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]

---

##### `putDeniedParameter` <a name="putDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter"></a>

```typescript
public putDeniedParameter(value: IResolvable | DataVaultPolicyDocumentRuleDeniedParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]

---

##### `resetAllowedParameter` <a name="resetAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter"></a>

```typescript
public resetAllowedParameter(): void
```

##### `resetDeniedParameter` <a name="resetDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter"></a>

```typescript
public resetDeniedParameter(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMaxWrappingTtl` <a name="resetMaxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl"></a>

```typescript
public resetMaxWrappingTtl(): void
```

##### `resetMinWrappingTtl` <a name="resetMinWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl"></a>

```typescript
public resetMinWrappingTtl(): void
```

##### `resetRequiredParameters` <a name="resetRequiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters"></a>

```typescript
public resetRequiredParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter">allowedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter">deniedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput">allowedParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput">deniedParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput">maxWrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput">minWrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput">requiredParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl">maxWrappingTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl">minWrappingTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters">requiredParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedParameter`<sup>Required</sup> <a name="allowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter"></a>

```typescript
public readonly allowedParameter: DataVaultPolicyDocumentRuleAllowedParameterList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a>

---

##### `deniedParameter`<sup>Required</sup> <a name="deniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter"></a>

```typescript
public readonly deniedParameter: DataVaultPolicyDocumentRuleDeniedParameterList;
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a>

---

##### `allowedParameterInput`<sup>Optional</sup> <a name="allowedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput"></a>

```typescript
public readonly allowedParameterInput: IResolvable | DataVaultPolicyDocumentRuleAllowedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>[]

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `deniedParameterInput`<sup>Optional</sup> <a name="deniedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput"></a>

```typescript
public readonly deniedParameterInput: IResolvable | DataVaultPolicyDocumentRuleDeniedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `maxWrappingTtlInput`<sup>Optional</sup> <a name="maxWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput"></a>

```typescript
public readonly maxWrappingTtlInput: string;
```

- *Type:* string

---

##### `minWrappingTtlInput`<sup>Optional</sup> <a name="minWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput"></a>

```typescript
public readonly minWrappingTtlInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requiredParametersInput`<sup>Optional</sup> <a name="requiredParametersInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput"></a>

```typescript
public readonly requiredParametersInput: string[];
```

- *Type:* string[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `maxWrappingTtl`<sup>Required</sup> <a name="maxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl"></a>

```typescript
public readonly maxWrappingTtl: string;
```

- *Type:* string

---

##### `minWrappingTtl`<sup>Required</sup> <a name="minWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl"></a>

```typescript
public readonly minWrappingTtl: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requiredParameters`<sup>Required</sup> <a name="requiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters"></a>

```typescript
public readonly requiredParameters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataVaultPolicyDocumentRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>

---



