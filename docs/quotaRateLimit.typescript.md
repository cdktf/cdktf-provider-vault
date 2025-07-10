# `quotaRateLimit` Submodule <a name="`quotaRateLimit` Submodule" id="@cdktf/provider-vault.quotaRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaRateLimit <a name="QuotaRateLimit" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit vault_quota_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

new quotaRateLimit.QuotaRateLimit(scope: Construct, id: string, config: QuotaRateLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig">QuotaRateLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig">QuotaRateLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval">resetBlockInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInheritable">resetInheritable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetSecondaryRate">resetSecondaryRate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockInterval` <a name="resetBlockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval"></a>

```typescript
public resetBlockInterval(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInheritable` <a name="resetInheritable" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInheritable"></a>

```typescript
public resetInheritable(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSecondaryRate` <a name="resetSecondaryRate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetSecondaryRate"></a>

```typescript
public resetSecondaryRate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaRateLimit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

quotaRateLimit.QuotaRateLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

quotaRateLimit.QuotaRateLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

quotaRateLimit.QuotaRateLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

quotaRateLimit.QuotaRateLimit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuotaRateLimit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaRateLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuotaRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput">blockIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.inheritableInput">inheritableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput">rateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.secondaryRateInput">secondaryRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval">blockInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.inheritable">inheritable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate">rate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.secondaryRate">secondaryRate</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockIntervalInput`<sup>Optional</sup> <a name="blockIntervalInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput"></a>

```typescript
public readonly blockIntervalInput: number;
```

- *Type:* number

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inheritableInput`<sup>Optional</sup> <a name="inheritableInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.inheritableInput"></a>

```typescript
public readonly inheritableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput"></a>

```typescript
public readonly rateInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secondaryRateInput`<sup>Optional</sup> <a name="secondaryRateInput" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.secondaryRateInput"></a>

```typescript
public readonly secondaryRateInput: number;
```

- *Type:* number

---

##### `blockInterval`<sup>Required</sup> <a name="blockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval"></a>

```typescript
public readonly blockInterval: number;
```

- *Type:* number

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inheritable`<sup>Required</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.inheritable"></a>

```typescript
public readonly inheritable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secondaryRate`<sup>Required</sup> <a name="secondaryRate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.secondaryRate"></a>

```typescript
public readonly secondaryRate: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaRateLimitConfig <a name="QuotaRateLimitConfig" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.Initializer"></a>

```typescript
import { quotaRateLimit } from '@cdktf/provider-vault'

const quotaRateLimitConfig: quotaRateLimit.QuotaRateLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name">name</a></code> | <code>string</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate">rate</a></code> | <code>number</code> | The maximum number of requests at any given second to be allowed by the quota rule. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval">blockInterval</a></code> | <code>number</code> | If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Attribute used to group requests for rate limiting. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.inheritable">inheritable</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval">interval</a></code> | <code>number</code> | The duration in seconds to enforce rate limiting for. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path">path</a></code> | <code>string</code> | Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.role">role</a></code> | <code>string</code> | If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.secondaryRate">secondaryRate</a></code> | <code>number</code> | Only available when using the "entity_then_ip" or "entity_then_none" group_by modes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#name QuotaRateLimit#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

The maximum number of requests at any given second to be allowed by the quota rule.

The rate must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}

---

##### `blockInterval`<sup>Optional</sup> <a name="blockInterval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval"></a>

```typescript
public readonly blockInterval: number;
```

- *Type:* number

If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Attribute used to group requests for rate limiting.

Limits are enforced independently for each group. Valid group_by modes are: 1) "ip" that groups requests by their source IP address (group_by defaults to ip if unset); 2) "none" that groups all requests that match the rate limit quota rule together; 3) "entity_then_ip" that groups requests by their entity ID for authenticated requests that carry one, or by their IP for unauthenticated requests (or requests whose authentication is not connected to an entity); and 4) "entity_then_none" which also groups requests by their entity ID when available, but the rest is all grouped together (i.e. unauthenticated or with authentication not connected to an entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#group_by QuotaRateLimit#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inheritable`<sup>Optional</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.inheritable"></a>

```typescript
public readonly inheritable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace.

The inheritable parameter cannot be set to true if the path does not specify a namespace. Only the quotas associated with the root namespace are inheritable by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#inheritable QuotaRateLimit#inheritable}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The duration in seconds to enforce rate limiting for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#path QuotaRateLimit#path}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#role QuotaRateLimit#role}

---

##### `secondaryRate`<sup>Optional</sup> <a name="secondaryRate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.secondaryRate"></a>

```typescript
public readonly secondaryRate: number;
```

- *Type:* number

Only available when using the "entity_then_ip" or "entity_then_none" group_by modes.

This is the rate limit applied to the requests that fall under the "ip" or "none" groupings, while the authenticated requests that contain an entity ID are subject to the "rate" field instead. Defaults to the same value as "rate".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_rate_limit#secondary_rate QuotaRateLimit#secondary_rate}

---



