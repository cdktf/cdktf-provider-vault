# `transformTransformation` Submodule <a name="`transformTransformation` Submodule" id="@cdktf/provider-vault.transformTransformation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformation <a name="TransformTransformation" id="@cdktf/provider-vault.transformTransformation.TransformTransformation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation vault_transform_transformation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

new transformTransformation.TransformTransformation(scope: Construct, id: string, config: TransformTransformationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig">TransformTransformationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter">resetMaskingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates">resetTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource">resetTweakSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetDeletionAllowed"></a>

```typescript
public resetDeletionAllowed(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaskingCharacter` <a name="resetMaskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetMaskingCharacter"></a>

```typescript
public resetMaskingCharacter(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetTemplates` <a name="resetTemplates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTemplates"></a>

```typescript
public resetTemplates(): void
```

##### `resetTweakSource` <a name="resetTweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetTweakSource"></a>

```typescript
public resetTweakSource(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

transformTransformation.TransformTransformation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

transformTransformation.TransformTransformation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

transformTransformation.TransformTransformation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

transformTransformation.TransformTransformation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransformTransformation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransformTransformation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput">maskingCharacterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput">templatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput">tweakSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter">maskingCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates">templates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource">tweakSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowedInput"></a>

```typescript
public readonly deletionAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingCharacterInput`<sup>Optional</sup> <a name="maskingCharacterInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacterInput"></a>

```typescript
public readonly maskingCharacterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templatesInput"></a>

```typescript
public readonly templatesInput: string[];
```

- *Type:* string[]

---

##### `tweakSourceInput`<sup>Optional</sup> <a name="tweakSourceInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSourceInput"></a>

```typescript
public readonly tweakSourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingCharacter`<sup>Required</sup> <a name="maskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.maskingCharacter"></a>

```typescript
public readonly maskingCharacter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.templates"></a>

```typescript
public readonly templates: string[];
```

- *Type:* string[]

---

##### `tweakSource`<sup>Required</sup> <a name="tweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tweakSource"></a>

```typescript
public readonly tweakSource: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transformTransformation.TransformTransformation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationConfig <a name="TransformTransformationConfig" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.Initializer"></a>

```typescript
import { transformTransformation } from '@cdktf/provider-vault'

const transformTransformationConfig: transformTransformation.TransformTransformationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name">name</a></code> | <code>string</code> | The name of the transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path">path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | The set of roles allowed to perform this transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#id TransformTransformation#id}. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter">maskingCharacter</a></code> | <code>string</code> | The character used to replace data when in masking mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template">template</a></code> | <code>string</code> | The name of the template to use. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates">templates</a></code> | <code>string[]</code> | Templates configured for transformation. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource">tweakSource</a></code> | <code>string</code> | The source of where the tweak value comes from. Only valid when in FPE mode. |
| <code><a href="#@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type">type</a></code> | <code>string</code> | The type of transformation to perform. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#name TransformTransformation#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#path TransformTransformation#path}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

The set of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#allowed_roles TransformTransformation#allowed_roles}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#deletion_allowed TransformTransformation#deletion_allowed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#id TransformTransformation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maskingCharacter`<sup>Optional</sup> <a name="maskingCharacter" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.maskingCharacter"></a>

```typescript
public readonly maskingCharacter: string;
```

- *Type:* string

The character used to replace data when in masking mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#masking_character TransformTransformation#masking_character}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#namespace TransformTransformation#namespace}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#template TransformTransformation#template}

---

##### `templates`<sup>Optional</sup> <a name="templates" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.templates"></a>

```typescript
public readonly templates: string[];
```

- *Type:* string[]

Templates configured for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#templates TransformTransformation#templates}

---

##### `tweakSource`<sup>Optional</sup> <a name="tweakSource" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.tweakSource"></a>

```typescript
public readonly tweakSource: string;
```

- *Type:* string

The source of where the tweak value comes from. Only valid when in FPE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#tweak_source TransformTransformation#tweak_source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transformTransformation.TransformTransformationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of transformation to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/transform_transformation#type TransformTransformation#type}

---



