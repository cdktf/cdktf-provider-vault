# `raftAutopilot` Submodule <a name="`raftAutopilot` Submodule" id="@cdktf/provider-vault.raftAutopilot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftAutopilot <a name="RaftAutopilot" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot vault_raft_autopilot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

new raftAutopilot.RaftAutopilot(scope: Construct, id: string, config?: RaftAutopilotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers">resetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold">resetDeadServerLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration">resetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold">resetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs">resetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum">resetMinQuorum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime">resetServerStabilizationTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCleanupDeadServers` <a name="resetCleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers"></a>

```typescript
public resetCleanupDeadServers(): void
```

##### `resetDeadServerLastContactThreshold` <a name="resetDeadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold"></a>

```typescript
public resetDeadServerLastContactThreshold(): void
```

##### `resetDisableUpgradeMigration` <a name="resetDisableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration"></a>

```typescript
public resetDisableUpgradeMigration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastContactThreshold` <a name="resetLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold"></a>

```typescript
public resetLastContactThreshold(): void
```

##### `resetMaxTrailingLogs` <a name="resetMaxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs"></a>

```typescript
public resetMaxTrailingLogs(): void
```

##### `resetMinQuorum` <a name="resetMinQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum"></a>

```typescript
public resetMinQuorum(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetServerStabilizationTime` <a name="resetServerStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime"></a>

```typescript
public resetServerStabilizationTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

raftAutopilot.RaftAutopilot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

raftAutopilot.RaftAutopilot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

raftAutopilot.RaftAutopilot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

raftAutopilot.RaftAutopilot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RaftAutopilot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RaftAutopilot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RaftAutopilot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RaftAutopilot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput">cleanupDeadServersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput">deadServerLastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput">disableUpgradeMigrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput">lastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput">maxTrailingLogsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput">minQuorumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput">serverStabilizationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold">deadServerLastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold">lastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum">minQuorum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cleanupDeadServersInput`<sup>Optional</sup> <a name="cleanupDeadServersInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput"></a>

```typescript
public readonly cleanupDeadServersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deadServerLastContactThresholdInput`<sup>Optional</sup> <a name="deadServerLastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput"></a>

```typescript
public readonly deadServerLastContactThresholdInput: string;
```

- *Type:* string

---

##### `disableUpgradeMigrationInput`<sup>Optional</sup> <a name="disableUpgradeMigrationInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput"></a>

```typescript
public readonly disableUpgradeMigrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastContactThresholdInput`<sup>Optional</sup> <a name="lastContactThresholdInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput"></a>

```typescript
public readonly lastContactThresholdInput: string;
```

- *Type:* string

---

##### `maxTrailingLogsInput`<sup>Optional</sup> <a name="maxTrailingLogsInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput"></a>

```typescript
public readonly maxTrailingLogsInput: number;
```

- *Type:* number

---

##### `minQuorumInput`<sup>Optional</sup> <a name="minQuorumInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput"></a>

```typescript
public readonly minQuorumInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serverStabilizationTimeInput`<sup>Optional</sup> <a name="serverStabilizationTimeInput" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput"></a>

```typescript
public readonly serverStabilizationTimeInput: string;
```

- *Type:* string

---

##### `cleanupDeadServers`<sup>Required</sup> <a name="cleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers"></a>

```typescript
public readonly cleanupDeadServers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deadServerLastContactThreshold`<sup>Required</sup> <a name="deadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold"></a>

```typescript
public readonly deadServerLastContactThreshold: string;
```

- *Type:* string

---

##### `disableUpgradeMigration`<sup>Required</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration"></a>

```typescript
public readonly disableUpgradeMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastContactThreshold`<sup>Required</sup> <a name="lastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold"></a>

```typescript
public readonly lastContactThreshold: string;
```

- *Type:* string

---

##### `maxTrailingLogs`<sup>Required</sup> <a name="maxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs"></a>

```typescript
public readonly maxTrailingLogs: number;
```

- *Type:* number

---

##### `minQuorum`<sup>Required</sup> <a name="minQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum"></a>

```typescript
public readonly minQuorum: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `serverStabilizationTime`<sup>Required</sup> <a name="serverStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime"></a>

```typescript
public readonly serverStabilizationTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RaftAutopilotConfig <a name="RaftAutopilotConfig" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.Initializer"></a>

```typescript
import { raftAutopilot } from '@cdktf/provider-vault'

const raftAutopilotConfig: raftAutopilot.RaftAutopilotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers">cleanupDeadServers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold">deadServerLastContactThreshold</a></code> | <code>string</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration">disableUpgradeMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold">lastContactThreshold</a></code> | <code>string</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs">maxTrailingLogs</a></code> | <code>number</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum">minQuorum</a></code> | <code>number</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime">serverStabilizationTime</a></code> | <code>string</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cleanupDeadServers`<sup>Optional</sup> <a name="cleanupDeadServers" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers"></a>

```typescript
public readonly cleanupDeadServers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `deadServerLastContactThreshold`<sup>Optional</sup> <a name="deadServerLastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold"></a>

```typescript
public readonly deadServerLastContactThreshold: string;
```

- *Type:* string

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `disableUpgradeMigration`<sup>Optional</sup> <a name="disableUpgradeMigration" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration"></a>

```typescript
public readonly disableUpgradeMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastContactThreshold`<sup>Optional</sup> <a name="lastContactThreshold" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold"></a>

```typescript
public readonly lastContactThreshold: string;
```

- *Type:* string

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `maxTrailingLogs`<sup>Optional</sup> <a name="maxTrailingLogs" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs"></a>

```typescript
public readonly maxTrailingLogs: number;
```

- *Type:* number

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `minQuorum`<sup>Optional</sup> <a name="minQuorum" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum"></a>

```typescript
public readonly minQuorum: number;
```

- *Type:* number

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `serverStabilizationTime`<sup>Optional</sup> <a name="serverStabilizationTime" id="@cdktf/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime"></a>

```typescript
public readonly serverStabilizationTime: string;
```

- *Type:* string

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---



