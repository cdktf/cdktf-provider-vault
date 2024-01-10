# `dataVaultRaftAutopilotState` Submodule <a name="`dataVaultRaftAutopilotState` Submodule" id="@cdktf/provider-vault.dataVaultRaftAutopilotState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultRaftAutopilotState <a name="DataVaultRaftAutopilotState" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/raft_autopilot_state vault_raft_autopilot_state}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

new dataVaultRaftAutopilotState.DataVaultRaftAutopilotState(scope: Construct, id: string, config?: DataVaultRaftAutopilotStateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig">DataVaultRaftAutopilotStateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig">DataVaultRaftAutopilotStateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultRaftAutopilotState resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVaultRaftAutopilotState resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultRaftAutopilotState to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultRaftAutopilotState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/raft_autopilot_state#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultRaftAutopilotState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance">failureTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader">leader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance">optimisticFailureTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones">redundancyZones</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson">redundancyZonesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers">servers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson">serversJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo">upgradeInfo</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson">upgradeInfoJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters">voters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `failureTolerance`<sup>Required</sup> <a name="failureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.failureTolerance"></a>

```typescript
public readonly failureTolerance: number;
```

- *Type:* number

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.healthy"></a>

```typescript
public readonly healthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leader`<sup>Required</sup> <a name="leader" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.leader"></a>

```typescript
public readonly leader: string;
```

- *Type:* string

---

##### `optimisticFailureTolerance`<sup>Required</sup> <a name="optimisticFailureTolerance" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.optimisticFailureTolerance"></a>

```typescript
public readonly optimisticFailureTolerance: number;
```

- *Type:* number

---

##### `redundancyZones`<sup>Required</sup> <a name="redundancyZones" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZones"></a>

```typescript
public readonly redundancyZones: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `redundancyZonesJson`<sup>Required</sup> <a name="redundancyZonesJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.redundancyZonesJson"></a>

```typescript
public readonly redundancyZonesJson: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.servers"></a>

```typescript
public readonly servers: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `serversJson`<sup>Required</sup> <a name="serversJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.serversJson"></a>

```typescript
public readonly serversJson: string;
```

- *Type:* string

---

##### `upgradeInfo`<sup>Required</sup> <a name="upgradeInfo" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfo"></a>

```typescript
public readonly upgradeInfo: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `upgradeInfoJson`<sup>Required</sup> <a name="upgradeInfoJson" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.upgradeInfoJson"></a>

```typescript
public readonly upgradeInfoJson: string;
```

- *Type:* string

---

##### `voters`<sup>Required</sup> <a name="voters" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.voters"></a>

```typescript
public readonly voters: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotState.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultRaftAutopilotStateConfig <a name="DataVaultRaftAutopilotStateConfig" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.Initializer"></a>

```typescript
import { dataVaultRaftAutopilotState } from '@cdktf/provider-vault'

const dataVaultRaftAutopilotStateConfig: dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/raft_autopilot_state#id DataVaultRaftAutopilotState#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultRaftAutopilotState.DataVaultRaftAutopilotStateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/raft_autopilot_state#namespace DataVaultRaftAutopilotState#namespace}

---



