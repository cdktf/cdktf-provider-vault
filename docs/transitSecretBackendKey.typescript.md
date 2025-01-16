# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktf/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

new transitSecretBackendKey.TransitSecretBackendKey(scope: Construct, id: string, config: TransitSecretBackendKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">resetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">resetConvergentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">resetDerived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">resetExportable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">resetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowPlaintextBackup` <a name="resetAllowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```typescript
public resetAllowPlaintextBackup(): void
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```typescript
public resetAutoRotatePeriod(): void
```

##### `resetConvergentEncryption` <a name="resetConvergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```typescript
public resetConvergentEncryption(): void
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```typescript
public resetDeletionAllowed(): void
```

##### `resetDerived` <a name="resetDerived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```typescript
public resetDerived(): void
```

##### `resetExportable` <a name="resetExportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```typescript
public resetExportable(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```typescript
public resetMinDecryptionVersion(): void
```

##### `resetMinEncryptionVersion` <a name="resetMinEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```typescript
public resetMinEncryptionVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransitSecretBackendKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

transitSecretBackendKey.TransitSecretBackendKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransitSecretBackendKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransitSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransitSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">keys</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">supportsDecryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">supportsDerivation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">supportsEncryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">supportsSigning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">allowPlaintextBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">convergentEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">derivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">exportableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">minEncryptionVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">convergentEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">derived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">exportable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```typescript
public readonly keys: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```typescript
public readonly minAvailableVersion: number;
```

- *Type:* number

---

##### `supportsDecryption`<sup>Required</sup> <a name="supportsDecryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```typescript
public readonly supportsDecryption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsDerivation`<sup>Required</sup> <a name="supportsDerivation" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```typescript
public readonly supportsDerivation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsEncryption`<sup>Required</sup> <a name="supportsEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```typescript
public readonly supportsEncryption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportsSigning`<sup>Required</sup> <a name="supportsSigning" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```typescript
public readonly supportsSigning: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowPlaintextBackupInput`<sup>Optional</sup> <a name="allowPlaintextBackupInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```typescript
public readonly allowPlaintextBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```typescript
public readonly autoRotatePeriodInput: number;
```

- *Type:* number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `convergentEncryptionInput`<sup>Optional</sup> <a name="convergentEncryptionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```typescript
public readonly convergentEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```typescript
public readonly deletionAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `derivedInput`<sup>Optional</sup> <a name="derivedInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```typescript
public readonly derivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```typescript
public readonly exportableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```typescript
public readonly minDecryptionVersionInput: number;
```

- *Type:* number

---

##### `minEncryptionVersionInput`<sup>Optional</sup> <a name="minEncryptionVersionInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```typescript
public readonly minEncryptionVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowPlaintextBackup`<sup>Required</sup> <a name="allowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```typescript
public readonly allowPlaintextBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `convergentEncryption`<sup>Required</sup> <a name="convergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```typescript
public readonly convergentEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```typescript
public readonly derived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```typescript
public readonly exportable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

---

##### `minEncryptionVersion`<sup>Required</sup> <a name="minEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```typescript
public readonly minEncryptionVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```typescript
import { transitSecretBackendKey } from '@cdktf/provider-vault'

const transitSecretBackendKeyConfig: transitSecretBackendKey.TransitSecretBackendKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">backend</a></code> | <code>string</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the encryption key to create. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">convergentEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">derived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">exportable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize">keySize</a></code> | <code>number</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">type</a></code> | <code>string</code> | Specifies the type of key to create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```typescript
public readonly allowPlaintextBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `convergentEncryption`<sup>Optional</sup> <a name="convergentEncryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```typescript
public readonly convergentEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```typescript
public readonly derived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```typescript
public readonly exportable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```typescript
public readonly minEncryptionVersion: number;
```

- *Type:* number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of key to create.

The currently-supported types are: aes128-gcm96, aes256-gcm96, chacha20-poly1305, ed25519, ecdsa-p256, ecdsa-p384, ecdsa-p521, hmac, rsa-2048, rsa-3072, rsa-4096

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---



