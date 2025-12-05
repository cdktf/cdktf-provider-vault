# `pkiSecretBackendConfigCmpv2` Submodule <a name="`pkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigCmpv2 <a name="PkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

new pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2(scope: Construct, id: string, config: PkiSecretBackendConfigCmpv2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config">PkiSecretBackendConfigCmpv2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config">PkiSecretBackendConfigCmpv2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators">putAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields">resetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators">resetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy">resetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations">resetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing">resetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticators` <a name="putAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators"></a>

```typescript
public putAuthenticators(value: PkiSecretBackendConfigCmpv2Authenticators): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `resetAuditFields` <a name="resetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields"></a>

```typescript
public resetAuditFields(): void
```

##### `resetAuthenticators` <a name="resetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators"></a>

```typescript
public resetAuthenticators(): void
```

##### `resetDefaultPathPolicy` <a name="resetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy"></a>

```typescript
public resetDefaultPathPolicy(): void
```

##### `resetDisabledValidations` <a name="resetDisabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```typescript
public resetDisabledValidations(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnableSentinelParsing` <a name="resetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing"></a>

```typescript
public resetEnableSentinelParsing(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigCmpv2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput">auditFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput">authenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput">defaultPathPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput">disabledValidationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput">enableSentinelParsingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields">auditFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations">disabledValidations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators"></a>

```typescript
public readonly authenticators: PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `auditFieldsInput`<sup>Optional</sup> <a name="auditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput"></a>

```typescript
public readonly auditFieldsInput: string[];
```

- *Type:* string[]

---

##### `authenticatorsInput`<sup>Optional</sup> <a name="authenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput"></a>

```typescript
public readonly authenticatorsInput: PkiSecretBackendConfigCmpv2Authenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `defaultPathPolicyInput`<sup>Optional</sup> <a name="defaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput"></a>

```typescript
public readonly defaultPathPolicyInput: string;
```

- *Type:* string

---

##### `disabledValidationsInput`<sup>Optional</sup> <a name="disabledValidationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```typescript
public readonly disabledValidationsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSentinelParsingInput`<sup>Optional</sup> <a name="enableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput"></a>

```typescript
public readonly enableSentinelParsingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields"></a>

```typescript
public readonly auditFields: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

---

##### `disabledValidations`<sup>Required</sup> <a name="disabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```typescript
public readonly disabledValidations: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```typescript
public readonly enableSentinelParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigCmpv2Authenticators <a name="PkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

const pkiSecretBackendConfigCmpv2Authenticators: pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert">cert</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert"></a>

```typescript
public readonly cert: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}.

---

### PkiSecretBackendConfigCmpv2Config <a name="PkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.Initializer"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

const pkiSecretBackendConfigCmpv2Config: pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields">auditFields</a></code> | <code>string[]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>string</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations">disabledValidations</a></code> | <code>string[]</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields"></a>

```typescript
public readonly auditFields: string[];
```

- *Type:* string[]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators"></a>

```typescript
public readonly authenticators: PkiSecretBackendConfigCmpv2Authenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy"></a>

```typescript
public readonly defaultPathPolicy: string;
```

- *Type:* string

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `disabledValidations`<sup>Optional</sup> <a name="disabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```typescript
public readonly disabledValidations: string[];
```

- *Type:* string[]

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing"></a>

```typescript
public readonly enableSentinelParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```typescript
import { pkiSecretBackendConfigCmpv2 } from '@cdktf/provider-vault'

new pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert">resetCert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert"></a>

```typescript
public resetCert(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput">certInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">cert</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```typescript
public readonly cert: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PkiSecretBackendConfigCmpv2Authenticators;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---



