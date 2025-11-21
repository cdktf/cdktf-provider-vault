# `configUiCustomMessage` Submodule <a name="`configUiCustomMessage` Submodule" id="@cdktf/provider-vault.configUiCustomMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiCustomMessage <a name="ConfigUiCustomMessage" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

new configUiCustomMessage.ConfigUiCustomMessage(scope: Construct, id: string, config: ConfigUiCustomMessageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig">ConfigUiCustomMessageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink">putLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated">resetAuthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLink` <a name="putLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink"></a>

```typescript
public putLink(value: ConfigUiCustomMessageLink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `resetAuthenticated` <a name="resetAuthenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated"></a>

```typescript
public resetAuthenticated(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetLink` <a name="resetLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

configUiCustomMessage.ConfigUiCustomMessage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigUiCustomMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigUiCustomMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigUiCustomMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput">authenticatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput">linkInput</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input">messageBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated">authenticated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64">messageBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link"></a>

```typescript
public readonly link: ConfigUiCustomMessageLinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a>

---

##### `authenticatedInput`<sup>Optional</sup> <a name="authenticatedInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput"></a>

```typescript
public readonly authenticatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput"></a>

```typescript
public readonly linkInput: ConfigUiCustomMessageLink;
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `messageBase64Input`<sup>Optional</sup> <a name="messageBase64Input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input"></a>

```typescript
public readonly messageBase64Input: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `authenticated`<sup>Required</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated"></a>

```typescript
public readonly authenticated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `messageBase64`<sup>Required</sup> <a name="messageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64"></a>

```typescript
public readonly messageBase64: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiCustomMessageConfig <a name="ConfigUiCustomMessageConfig" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.Initializer"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

const configUiCustomMessageConfig: configUiCustomMessage.ConfigUiCustomMessageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64">messageBase64</a></code> | <code>string</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime">startTime</a></code> | <code>string</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title">title</a></code> | <code>string</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated">authenticated</a></code> | <code>boolean \| cdktf.IResolvable</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime">endTime</a></code> | <code>string</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type">type</a></code> | <code>string</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `messageBase64`<sup>Required</sup> <a name="messageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64"></a>

```typescript
public readonly messageBase64: string;
```

- *Type:* string

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `authenticated`<sup>Optional</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated"></a>

```typescript
public readonly authenticated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link"></a>

```typescript
public readonly link: ConfigUiCustomMessageLink;
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

### ConfigUiCustomMessageLink <a name="ConfigUiCustomMessageLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.Initializer"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

const configUiCustomMessageLink: configUiCustomMessage.ConfigUiCustomMessageLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href">href</a></code> | <code>string</code> | The URL of the hyperlink. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title">title</a></code> | <code>string</code> | The title of the hyperlink. |

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigUiCustomMessageLinkOutputReference <a name="ConfigUiCustomMessageLinkOutputReference" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer"></a>

```typescript
import { configUiCustomMessage } from '@cdktf/provider-vault'

new configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput">hrefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href">href</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hrefInput`<sup>Optional</sup> <a name="hrefInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput"></a>

```typescript
public readonly hrefInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href"></a>

```typescript
public readonly href: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigUiCustomMessageLink;
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---



