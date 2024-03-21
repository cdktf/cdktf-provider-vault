# `ldapSecretBackendLibrarySet` Submodule <a name="`ldapSecretBackendLibrarySet` Submodule" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendLibrarySet <a name="LdapSecretBackendLibrarySet" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set vault_ldap_secret_backend_library_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

new ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet(scope: Construct, id: string, config: LdapSecretBackendLibrarySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig">LdapSecretBackendLibrarySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig">LdapSecretBackendLibrarySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement">resetDisableCheckInEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableCheckInEnforcement` <a name="resetDisableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement"></a>

```typescript
public resetDisableCheckInEnforcement(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendLibrarySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LdapSecretBackendLibrarySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackendLibrarySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackendLibrarySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendLibrarySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput">disableCheckInEnforcementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput">serviceAccountNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement">disableCheckInEnforcement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames">serviceAccountNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disableCheckInEnforcementInput`<sup>Optional</sup> <a name="disableCheckInEnforcementInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput"></a>

```typescript
public readonly disableCheckInEnforcementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serviceAccountNamesInput`<sup>Optional</sup> <a name="serviceAccountNamesInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput"></a>

```typescript
public readonly serviceAccountNamesInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `disableCheckInEnforcement`<sup>Required</sup> <a name="disableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement"></a>

```typescript
public readonly disableCheckInEnforcement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `serviceAccountNames`<sup>Required</sup> <a name="serviceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames"></a>

```typescript
public readonly serviceAccountNames: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendLibrarySetConfig <a name="LdapSecretBackendLibrarySetConfig" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.Initializer"></a>

```typescript
import { ldapSecretBackendLibrarySet } from '@cdktf/provider-vault'

const ldapSecretBackendLibrarySetConfig: ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name">name</a></code> | <code>string</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames">serviceAccountNames</a></code> | <code>string[]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement">disableCheckInEnforcement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount">mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl">ttl</a></code> | <code>number</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `serviceAccountNames`<sup>Required</sup> <a name="serviceAccountNames" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames"></a>

```typescript
public readonly serviceAccountNames: string[];
```

- *Type:* string[]

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `disableCheckInEnforcement`<sup>Optional</sup> <a name="disableCheckInEnforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement"></a>

```typescript
public readonly disableCheckInEnforcement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---



