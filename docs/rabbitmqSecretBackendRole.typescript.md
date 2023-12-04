# `rabbitmqSecretBackendRole` Submodule <a name="`rabbitmqSecretBackendRole` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackendRole <a name="RabbitmqSecretBackendRole" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRole(scope: Construct, id: string, config: RabbitmqSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig">RabbitmqSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig">RabbitmqSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost">putVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic">putVhostTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost">resetVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic">resetVhostTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVhost` <a name="putVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost"></a>

```typescript
public putVhost(value: IResolvable | RabbitmqSecretBackendRoleVhost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]

---

##### `putVhostTopic` <a name="putVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic"></a>

```typescript
public putVhostTopic(value: IResolvable | RabbitmqSecretBackendRoleVhostTopic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVhost` <a name="resetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost"></a>

```typescript
public resetVhost(): void
```

##### `resetVhostTopic` <a name="resetVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic"></a>

```typescript
public resetVhostTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RabbitmqSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RabbitmqSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RabbitmqSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RabbitmqSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RabbitmqSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic">vhostTopic</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput">vhostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput">vhostTopicInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags">tags</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost"></a>

```typescript
public readonly vhost: RabbitmqSecretBackendRoleVhostList;
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a>

---

##### `vhostTopic`<sup>Required</sup> <a name="vhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic"></a>

```typescript
public readonly vhostTopic: RabbitmqSecretBackendRoleVhostTopicList;
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `vhostInput`<sup>Optional</sup> <a name="vhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput"></a>

```typescript
public readonly vhostInput: IResolvable | RabbitmqSecretBackendRoleVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]

---

##### `vhostTopicInput`<sup>Optional</sup> <a name="vhostTopicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput"></a>

```typescript
public readonly vhostTopicInput: IResolvable | RabbitmqSecretBackendRoleVhostTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendRoleConfig <a name="RabbitmqSecretBackendRoleConfig" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

const rabbitmqSecretBackendRoleConfig: rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags">tags</a></code> | <code>string</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost">vhost</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]</code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic">vhostTopic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]</code> | vhost_topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost"></a>

```typescript
public readonly vhost: IResolvable | RabbitmqSecretBackendRoleVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `vhostTopic`<sup>Optional</sup> <a name="vhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic"></a>

```typescript
public readonly vhostTopic: IResolvable | RabbitmqSecretBackendRoleVhostTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]

vhost_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

### RabbitmqSecretBackendRoleVhost <a name="RabbitmqSecretBackendRoleVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

const rabbitmqSecretBackendRoleVhost: rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure">configure</a></code> | <code>string</code> | The configure permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host">host</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read">read</a></code> | <code>string</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write">write</a></code> | <code>string</code> | The write permissions for this vhost. |

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure"></a>

```typescript
public readonly configure: string;
```

- *Type:* string

The configure permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#configure RabbitmqSecretBackendRole#configure}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write"></a>

```typescript
public readonly write: string;
```

- *Type:* string

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

### RabbitmqSecretBackendRoleVhostTopic <a name="RabbitmqSecretBackendRoleVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

const rabbitmqSecretBackendRoleVhostTopic: rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host">host</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost">vhost</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]</code> | vhost block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost"></a>

```typescript
public readonly vhost: IResolvable | RabbitmqSecretBackendRoleVhostTopicVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

### RabbitmqSecretBackendRoleVhostTopicVhost <a name="RabbitmqSecretBackendRoleVhostTopicVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

const rabbitmqSecretBackendRoleVhostTopicVhost: rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read">read</a></code> | <code>string</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic">topic</a></code> | <code>string</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write">write</a></code> | <code>string</code> | The write permissions for this vhost. |

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#topic RabbitmqSecretBackendRole#topic}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write"></a>

```typescript
public readonly write: string;
```

- *Type:* string

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

## Classes <a name="Classes" id="Classes"></a>

### RabbitmqSecretBackendRoleVhostList <a name="RabbitmqSecretBackendRoleVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get"></a>

```typescript
public get(index: number): RabbitmqSecretBackendRoleVhostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>[]

---


### RabbitmqSecretBackendRoleVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput">configureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput">writeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure">configure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write">write</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configureInput`<sup>Optional</sup> <a name="configureInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput"></a>

```typescript
public readonly configureInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: string;
```

- *Type:* string

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure"></a>

```typescript
public readonly configure: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write"></a>

```typescript
public readonly write: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>

---


### RabbitmqSecretBackendRoleVhostTopicList <a name="RabbitmqSecretBackendRoleVhostTopicList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get"></a>

```typescript
public get(index: number): RabbitmqSecretBackendRoleVhostTopicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhostTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>[]

---


### RabbitmqSecretBackendRoleVhostTopicOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost">putVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost">resetVhost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVhost` <a name="putVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost"></a>

```typescript
public putVhost(value: IResolvable | RabbitmqSecretBackendRoleVhostTopicVhost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]

---

##### `resetVhost` <a name="resetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost"></a>

```typescript
public resetVhost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput">vhostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost"></a>

```typescript
public readonly vhost: RabbitmqSecretBackendRoleVhostTopicVhostList;
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `vhostInput`<sup>Optional</sup> <a name="vhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput"></a>

```typescript
public readonly vhostInput: IResolvable | RabbitmqSecretBackendRoleVhostTopicVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhostTopic;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>

---


### RabbitmqSecretBackendRoleVhostTopicVhostList <a name="RabbitmqSecretBackendRoleVhostTopicVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get"></a>

```typescript
public get(index: number): RabbitmqSecretBackendRoleVhostTopicVhostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhostTopicVhost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>[]

---


### RabbitmqSecretBackendRoleVhostTopicVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer"></a>

```typescript
import { rabbitmqSecretBackendRole } from '@cdktf/provider-vault'

new rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput">writeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write">write</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write"></a>

```typescript
public readonly write: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RabbitmqSecretBackendRoleVhostTopicVhost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>

---



