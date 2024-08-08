# `pkiSecretBackendConfigEst` Submodule <a name="`pkiSecretBackendConfigEst` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigEst"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigEst <a name="PkiSecretBackendConfigEst" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

new pkiSecretBackendConfigEst.PkiSecretBackendConfigEst(scope: Construct, id: string, config: PkiSecretBackendConfigEstConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig">PkiSecretBackendConfigEstConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators">putAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields">resetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators">resetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount">resetDefaultMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy">resetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing">resetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy">resetLabelToPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticators` <a name="putAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators"></a>

```typescript
public putAuthenticators(value: PkiSecretBackendConfigEstAuthenticators): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `resetAuditFields` <a name="resetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields"></a>

```typescript
public resetAuditFields(): void
```

##### `resetAuthenticators` <a name="resetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators"></a>

```typescript
public resetAuthenticators(): void
```

##### `resetDefaultMount` <a name="resetDefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount"></a>

```typescript
public resetDefaultMount(): void
```

##### `resetDefaultPathPolicy` <a name="resetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy"></a>

```typescript
public resetDefaultPathPolicy(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnableSentinelParsing` <a name="resetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing"></a>

```typescript
public resetEnableSentinelParsing(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabelToPathPolicy` <a name="resetLabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy"></a>

```typescript
public resetLabelToPathPolicy(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigEst to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigEst that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigEst to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput">auditFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput">authenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput">defaultMountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput">defaultPathPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput">enableSentinelParsingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput">labelToPathPolicyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields">auditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount">defaultMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy">labelToPathPolicy</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators"></a>

```typescript
public readonly authenticators: PkiSecretBackendConfigEstAuthenticatorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `auditFieldsInput`<sup>Optional</sup> <a name="auditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput"></a>

```typescript
public readonly auditFieldsInput: string[];
```

- *Type:* string[]

---

##### `authenticatorsInput`<sup>Optional</sup> <a name="authenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput"></a>

```typescript
public readonly authenticatorsInput: PkiSecretBackendConfigEstAuthenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `defaultMountInput`<sup>Optional</sup> <a name="defaultMountInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput"></a>

```typescript
public readonly defaultMountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultPathPolicyInput`<sup>Optional</sup> <a name="defaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput"></a>

```typescript
public readonly defaultPathPolicyInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSentinelParsingInput`<sup>Optional</sup> <a name="enableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput"></a>

```typescript
public readonly enableSentinelParsingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelToPathPolicyInput`<sup>Optional</sup> <a name="labelToPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput"></a>

```typescript
public readonly labelToPathPolicyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields"></a>

```typescript
public readonly auditFields: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `defaultMount`<sup>Required</sup> <a name="defaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount"></a>

```typescript
public readonly defaultMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing"></a>

```typescript
public readonly enableSentinelParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labelToPathPolicy`<sup>Required</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy"></a>

```typescript
public readonly labelToPathPolicy: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigEstAuthenticators <a name="PkiSecretBackendConfigEstAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.Initializer"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

const pkiSecretBackendConfigEstAuthenticators: pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert">cert</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass">userpass</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert"></a>

```typescript
public readonly cert: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}.

---

##### `userpass`<sup>Optional</sup> <a name="userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass"></a>

```typescript
public readonly userpass: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}.

---

### PkiSecretBackendConfigEstConfig <a name="PkiSecretBackendConfigEstConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.Initializer"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

const pkiSecretBackendConfigEstConfig: pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields">auditFields</a></code> | <code>string[]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount">defaultMount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | Required to be set if default_mount is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether EST is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy">labelToPathPolicy</a></code> | <code>{[ key: string ]: string}</code> | Configures a pairing of an EST label with the redirected behavior for requests hitting that role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields"></a>

```typescript
public readonly auditFields: string[];
```

- *Type:* string[]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators"></a>

```typescript
public readonly authenticators: PkiSecretBackendConfigEstAuthenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}

---

##### `defaultMount`<sup>Optional</sup> <a name="defaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount"></a>

```typescript
public readonly defaultMount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

Required to be set if default_mount is enabled.

Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether EST is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing"></a>

```typescript
public readonly enableSentinelParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelToPathPolicy`<sup>Optional</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy"></a>

```typescript
public readonly labelToPathPolicy: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configures a pairing of an EST label with the redirected behavior for requests hitting that role.

The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigEstAuthenticatorsOutputReference <a name="PkiSecretBackendConfigEstAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer"></a>

```typescript
import { pkiSecretBackendConfigEst } from '@cdktf/provider-vault'

new pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass">resetUserpass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert"></a>

```typescript
public resetCert(): void
```

##### `resetUserpass` <a name="resetUserpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass"></a>

```typescript
public resetUserpass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput">certInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput">userpassInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass">userpass</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userpassInput`<sup>Optional</sup> <a name="userpassInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput"></a>

```typescript
public readonly userpassInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert"></a>

```typescript
public readonly cert: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userpass`<sup>Required</sup> <a name="userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass"></a>

```typescript
public readonly userpass: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PkiSecretBackendConfigEstAuthenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---



