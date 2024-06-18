# `identityOidcKeyAllowedClientId` Submodule <a name="`identityOidcKeyAllowedClientId` Submodule" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcKeyAllowedClientId <a name="IdentityOidcKeyAllowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id vault_identity_oidc_key_allowed_client_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

new identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId(scope: Construct, id: string, config: IdentityOidcKeyAllowedClientIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig">IdentityOidcKeyAllowedClientIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig">IdentityOidcKeyAllowedClientIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityOidcKeyAllowedClientId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityOidcKeyAllowedClientId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityOidcKeyAllowedClientId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcKeyAllowedClientId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput">allowedClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId">allowedClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedClientIdInput`<sup>Optional</sup> <a name="allowedClientIdInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientIdInput"></a>

```typescript
public readonly allowedClientIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `allowedClientId`<sup>Required</sup> <a name="allowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.allowedClientId"></a>

```typescript
public readonly allowedClientId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcKeyAllowedClientIdConfig <a name="IdentityOidcKeyAllowedClientIdConfig" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.Initializer"></a>

```typescript
import { identityOidcKeyAllowedClientId } from '@cdktf/provider-vault'

const identityOidcKeyAllowedClientIdConfig: identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId">allowedClientId</a></code> | <code>string</code> | Role Client ID allowed to use the key for signing. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName">keyName</a></code> | <code>string</code> | Name of the key. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedClientId`<sup>Required</sup> <a name="allowedClientId" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.allowedClientId"></a>

```typescript
public readonly allowedClientId: string;
```

- *Type:* string

Role Client ID allowed to use the key for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#allowed_client_id IdentityOidcKeyAllowedClientId#allowed_client_id}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#key_name IdentityOidcKeyAllowedClientId#key_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#id IdentityOidcKeyAllowedClientId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcKeyAllowedClientId.IdentityOidcKeyAllowedClientIdConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/identity_oidc_key_allowed_client_id#namespace IdentityOidcKeyAllowedClientId#namespace}

---



