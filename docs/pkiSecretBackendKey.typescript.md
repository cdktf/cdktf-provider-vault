# `pkiSecretBackendKey` Submodule <a name="`pkiSecretBackendKey` Submodule" id="@cdktf/provider-vault.pkiSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendKey <a name="PkiSecretBackendKey" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key vault_pki_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

new pkiSecretBackendKey.PkiSecretBackendKey(scope: Construct, id: string, config: PkiSecretBackendKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig">PkiSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig">PkiSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetManagedKeyId">resetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetManagedKeyName">resetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetManagedKeyId` <a name="resetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetManagedKeyId"></a>

```typescript
public resetManagedKeyId(): void
```

##### `resetManagedKeyName` <a name="resetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetManagedKeyName"></a>

```typescript
public resetManagedKeyName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isConstruct"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

pkiSecretBackendKey.PkiSecretBackendKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformElement"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

pkiSecretBackendKey.PkiSecretBackendKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformResource"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

pkiSecretBackendKey.PkiSecretBackendKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyBitsInput">keyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyIdInput">managedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyNameInput">managedKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyBits">keyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: number;
```

- *Type:* number

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `managedKeyIdInput`<sup>Optional</sup> <a name="managedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyIdInput"></a>

```typescript
public readonly managedKeyIdInput: string;
```

- *Type:* string

---

##### `managedKeyNameInput`<sup>Optional</sup> <a name="managedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyNameInput"></a>

```typescript
public readonly managedKeyNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `managedKeyId`<sup>Required</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

---

##### `managedKeyName`<sup>Required</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendKeyConfig <a name="PkiSecretBackendKeyConfig" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.Initializer"></a>

```typescript
import { pkiSecretBackendKey } from '@cdktf/provider-vault'

const pkiSecretBackendKeyConfig: pkiSecretBackendKey.PkiSecretBackendKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.backend">backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.type">type</a></code> | <code>string</code> | Specifies the type of the key to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#id PkiSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyBits">keyBits</a></code> | <code>number</code> | Specifies the number of bits to use for the generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | Specifies the desired key type; must be 'rsa', 'ed25519' or 'ec'. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | The managed key's UUID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | The managed key's configured name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#backend PkiSecretBackendKey#backend}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of the key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#type PkiSecretBackendKey#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#id PkiSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

Specifies the number of bits to use for the generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#key_bits PkiSecretBackendKey#key_bits}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#key_name PkiSecretBackendKey#key_name}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Specifies the desired key type; must be 'rsa', 'ed25519' or 'ec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#key_type PkiSecretBackendKey#key_type}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

The managed key's UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#managed_key_id PkiSecretBackendKey#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

The managed key's configured name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#managed_key_name PkiSecretBackendKey#managed_key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendKey.PkiSecretBackendKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_key#namespace PkiSecretBackendKey#namespace}

---



