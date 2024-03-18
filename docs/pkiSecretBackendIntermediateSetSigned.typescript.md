# `pkiSecretBackendIntermediateSetSigned` Submodule <a name="`pkiSecretBackendIntermediateSetSigned` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIntermediateSetSigned <a name="PkiSecretBackendIntermediateSetSigned" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed vault_pki_secret_backend_intermediate_set_signed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

new pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned(scope: Construct, id: string, config: PkiSecretBackendIntermediateSetSignedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig">PkiSecretBackendIntermediateSetSignedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig">PkiSecretBackendIntermediateSetSignedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIntermediateSetSigned resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendIntermediateSetSigned resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendIntermediateSetSigned to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendIntermediateSetSigned that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIntermediateSetSigned to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedIssuers">importedIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedKeys">importedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `importedIssuers`<sup>Required</sup> <a name="importedIssuers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedIssuers"></a>

```typescript
public readonly importedIssuers: string[];
```

- *Type:* string[]

---

##### `importedKeys`<sup>Required</sup> <a name="importedKeys" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.importedKeys"></a>

```typescript
public readonly importedKeys: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSigned.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIntermediateSetSignedConfig <a name="PkiSecretBackendIntermediateSetSignedConfig" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.Initializer"></a>

```typescript
import { pkiSecretBackendIntermediateSetSigned } from '@cdktf/provider-vault'

const pkiSecretBackendIntermediateSetSignedConfig: pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.certificate">certificate</a></code> | <code>string</code> | The certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#id PkiSecretBackendIntermediateSetSigned#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#backend PkiSecretBackendIntermediateSetSigned#backend}

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#certificate PkiSecretBackendIntermediateSetSigned#certificate}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#id PkiSecretBackendIntermediateSetSigned#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateSetSigned.PkiSecretBackendIntermediateSetSignedConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_intermediate_set_signed#namespace PkiSecretBackendIntermediateSetSigned#namespace}

---



