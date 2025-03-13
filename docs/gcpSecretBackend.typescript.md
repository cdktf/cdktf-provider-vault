# `gcpSecretBackend` Submodule <a name="`gcpSecretBackend` Submodule" id="@cdktf/provider-vault.gcpSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretBackend <a name="GcpSecretBackend" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend vault_gcp_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

new gcpSecretBackend.GcpSecretBackend(scope: Construct, id: string, config?: GcpSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig">GcpSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig">GcpSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenAudience">resetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableAutomatedRotation"></a>

```typescript
public resetDisableAutomatedRotation(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityTokenAudience` <a name="resetIdentityTokenAudience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenAudience"></a>

```typescript
public resetIdentityTokenAudience(): void
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenKey"></a>

```typescript
public resetIdentityTokenKey(): void
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetIdentityTokenTtl"></a>

```typescript
public resetIdentityTokenTtl(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationSchedule"></a>

```typescript
public resetRotationSchedule(): void
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetRotationWindow"></a>

```typescript
public resetRotationWindow(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GcpSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

gcpSecretBackend.GcpSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

gcpSecretBackend.GcpSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

gcpSecretBackend.GcpSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

gcpSecretBackend.GcpSecretBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GcpSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudienceInput">identityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindowInput">rotationWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudience">identityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtl">identityTokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotationInput"></a>

```typescript
public readonly disableAutomatedRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityTokenAudienceInput`<sup>Optional</sup> <a name="identityTokenAudienceInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudienceInput"></a>

```typescript
public readonly identityTokenAudienceInput: string;
```

- *Type:* string

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKeyInput"></a>

```typescript
public readonly identityTokenKeyInput: string;
```

- *Type:* string

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtlInput"></a>

```typescript
public readonly identityTokenTtlInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: number;
```

- *Type:* number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationScheduleInput"></a>

```typescript
public readonly rotationScheduleInput: string;
```

- *Type:* string

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindowInput"></a>

```typescript
public readonly rotationWindowInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityTokenAudience`<sup>Required</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenAudience"></a>

```typescript
public readonly identityTokenAudience: string;
```

- *Type:* string

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.identityTokenTtl"></a>

```typescript
public readonly identityTokenTtl: number;
```

- *Type:* number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretBackendConfig <a name="GcpSecretBackendConfig" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.Initializer"></a>

```typescript
import { gcpSecretBackend } from '@cdktf/provider-vault'

const gcpSecretBackendConfig: gcpSecretBackend.GcpSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials">credentials</a></code> | <code>string</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenAudience">identityTokenAudience</a></code> | <code>string</code> | The audience claim value for plugin identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path">path</a></code> | <code>string</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service Account to impersonate for plugin workload identity federation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#credentials GcpSecretBackend#credentials}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#default_lease_ttl_seconds GcpSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#description GcpSecretBackend#description}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#disable_automated_rotation GcpSecretBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#disable_remount GcpSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#id GcpSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenAudience"></a>

```typescript
public readonly identityTokenAudience: string;
```

- *Type:* string

The audience claim value for plugin identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#identity_token_audience GcpSecretBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#identity_token_key GcpSecretBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.identityTokenTtl"></a>

```typescript
public readonly identityTokenTtl: number;
```

- *Type:* number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#identity_token_ttl GcpSecretBackend#identity_token_ttl}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#local GcpSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#max_lease_ttl_seconds GcpSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#namespace GcpSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#path GcpSecretBackend#path}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#rotation_period GcpSecretBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#rotation_schedule GcpSecretBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#rotation_window GcpSecretBackend#rotation_window}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretBackend.GcpSecretBackendConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service Account to impersonate for plugin workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_backend#service_account_email GcpSecretBackend#service_account_email}

---



