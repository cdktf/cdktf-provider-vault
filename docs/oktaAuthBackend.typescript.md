# `oktaAuthBackend` Submodule <a name="`oktaAuthBackend` Submodule" id="@cdktf/provider-vault.oktaAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackend <a name="OktaAuthBackend" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend vault_okta_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

new oktaAuthBackend.OktaAuthBackend(scope: Construct, id: string, config: OktaAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig">OktaAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig">OktaAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa">resetBypassOktaMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroup` <a name="putGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup"></a>

```typescript
public putGroup(value: IResolvable | OktaAuthBackendGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---

##### `putUser` <a name="putUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser"></a>

```typescript
public putUser(value: IResolvable | OktaAuthBackendUser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetBypassOktaMfa` <a name="resetBypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa"></a>

```typescript
public resetBypassOktaMfa(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OktaAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

oktaAuthBackend.OktaAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

oktaAuthBackend.OktaAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

oktaAuthBackend.OktaAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

oktaAuthBackend.OktaAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OktaAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OktaAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OktaAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OktaAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group">group</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user">user</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput">bypassOktaMfaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput">groupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput">userInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa">bypassOktaMfa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group"></a>

```typescript
public readonly group: OktaAuthBackendGroupList;
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user"></a>

```typescript
public readonly user: OktaAuthBackendUserList;
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `bypassOktaMfaInput`<sup>Optional</sup> <a name="bypassOktaMfaInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput"></a>

```typescript
public readonly bypassOktaMfaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | OktaAuthBackendGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput"></a>

```typescript
public readonly userInput: IResolvable | OktaAuthBackendUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `bypassOktaMfa`<sup>Required</sup> <a name="bypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa"></a>

```typescript
public readonly bypassOktaMfa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendConfig <a name="OktaAuthBackendConfig" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

const oktaAuthBackendConfig: oktaAuthBackend.OktaAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization">organization</a></code> | <code>string</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa">bypassOktaMfa</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description">description</a></code> | <code>string</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group">group</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl">maxTtl</a></code> | <code>string</code> | Maximum duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path">path</a></code> | <code>string</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token">token</a></code> | <code>string</code> | The Okta API token. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl">ttl</a></code> | <code>string</code> | Duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user">user</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `bypassOktaMfa`<sup>Optional</sup> <a name="bypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa"></a>

```typescript
public readonly bypassOktaMfa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#description OktaAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group"></a>

```typescript
public readonly group: IResolvable | OktaAuthBackendGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

Maximum duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#max_ttl OktaAuthBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#path OktaAuthBackend#path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#token OktaAuthBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#ttl OktaAuthBackend#ttl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user"></a>

```typescript
public readonly user: IResolvable | OktaAuthBackendUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#user OktaAuthBackend#user}.

---

### OktaAuthBackendGroup <a name="OktaAuthBackendGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

const oktaAuthBackendGroup: oktaAuthBackend.OktaAuthBackendGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#group_name OktaAuthBackend#group_name}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

### OktaAuthBackendUser <a name="OktaAuthBackendUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

const oktaAuthBackendUser: oktaAuthBackend.OktaAuthBackendUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#username OktaAuthBackend#username}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#groups OktaAuthBackend#groups}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#policies OktaAuthBackend#policies}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/okta_auth_backend#username OktaAuthBackend#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### OktaAuthBackendGroupList <a name="OktaAuthBackendGroupList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

new oktaAuthBackend.OktaAuthBackendGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get"></a>

```typescript
public get(index: number): OktaAuthBackendGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OktaAuthBackendGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>[]

---


### OktaAuthBackendGroupOutputReference <a name="OktaAuthBackendGroupOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

new oktaAuthBackend.OktaAuthBackendGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OktaAuthBackendGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>

---


### OktaAuthBackendUserList <a name="OktaAuthBackendUserList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

new oktaAuthBackend.OktaAuthBackendUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get"></a>

```typescript
public get(index: number): OktaAuthBackendUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OktaAuthBackendUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>[]

---


### OktaAuthBackendUserOutputReference <a name="OktaAuthBackendUserOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer"></a>

```typescript
import { oktaAuthBackend } from '@cdktf/provider-vault'

new oktaAuthBackend.OktaAuthBackendUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OktaAuthBackendUser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>

---



