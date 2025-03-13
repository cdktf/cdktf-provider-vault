# `identityOidcClient` Submodule <a name="`identityOidcClient` Submodule" id="@cdktf/provider-vault.identityOidcClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcClient <a name="IdentityOidcClient" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client vault_identity_oidc_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

new identityOidcClient.IdentityOidcClient(scope: Construct, id: string, config: IdentityOidcClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig">IdentityOidcClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl">resetAccessTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments">resetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType">resetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl">resetIdTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessTokenTtl` <a name="resetAccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl"></a>

```typescript
public resetAccessTokenTtl(): void
```

##### `resetAssignments` <a name="resetAssignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments"></a>

```typescript
public resetAssignments(): void
```

##### `resetClientType` <a name="resetClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType"></a>

```typescript
public resetClientType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdTokenTtl` <a name="resetIdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl"></a>

```typescript
public resetIdTokenTtl(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris"></a>

```typescript
public resetRedirectUris(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

identityOidcClient.IdentityOidcClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

identityOidcClient.IdentityOidcClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

identityOidcClient.IdentityOidcClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

identityOidcClient.IdentityOidcClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityOidcClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityOidcClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput">accessTokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput">assignmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput">clientTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput">idTokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput">redirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl">accessTokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments">assignments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType">clientType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl">idTokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `accessTokenTtlInput`<sup>Optional</sup> <a name="accessTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput"></a>

```typescript
public readonly accessTokenTtlInput: number;
```

- *Type:* number

---

##### `assignmentsInput`<sup>Optional</sup> <a name="assignmentsInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput"></a>

```typescript
public readonly assignmentsInput: string[];
```

- *Type:* string[]

---

##### `clientTypeInput`<sup>Optional</sup> <a name="clientTypeInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput"></a>

```typescript
public readonly clientTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idTokenTtlInput`<sup>Optional</sup> <a name="idTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput"></a>

```typescript
public readonly idTokenTtlInput: number;
```

- *Type:* number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput"></a>

```typescript
public readonly redirectUrisInput: string[];
```

- *Type:* string[]

---

##### `accessTokenTtl`<sup>Required</sup> <a name="accessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl"></a>

```typescript
public readonly accessTokenTtl: number;
```

- *Type:* number

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments"></a>

```typescript
public readonly assignments: string[];
```

- *Type:* string[]

---

##### `clientType`<sup>Required</sup> <a name="clientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType"></a>

```typescript
public readonly clientType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idTokenTtl`<sup>Required</sup> <a name="idTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl"></a>

```typescript
public readonly idTokenTtl: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcClientConfig <a name="IdentityOidcClientConfig" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.Initializer"></a>

```typescript
import { identityOidcClient } from '@cdktf/provider-vault'

const identityOidcClientConfig: identityOidcClient.IdentityOidcClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name">name</a></code> | <code>string</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl">accessTokenTtl</a></code> | <code>number</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments">assignments</a></code> | <code>string[]</code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType">clientType</a></code> | <code>string</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl">idTokenTtl</a></code> | <code>number</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key">key</a></code> | <code>string</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | Redirection URI values used by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `accessTokenTtl`<sup>Optional</sup> <a name="accessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl"></a>

```typescript
public readonly accessTokenTtl: number;
```

- *Type:* number

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments"></a>

```typescript
public readonly assignments: string[];
```

- *Type:* string[]

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `clientType`<sup>Optional</sup> <a name="clientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType"></a>

```typescript
public readonly clientType: string;
```

- *Type:* string

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenTtl`<sup>Optional</sup> <a name="idTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl"></a>

```typescript
public readonly idTokenTtl: number;
```

- *Type:* number

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---



