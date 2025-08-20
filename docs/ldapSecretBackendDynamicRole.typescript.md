# `ldapSecretBackendDynamicRole` Submodule <a name="`ldapSecretBackendDynamicRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendDynamicRole <a name="LdapSecretBackendDynamicRole" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

new ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole(scope: Construct, id: string, config: LdapSecretBackendDynamicRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif">resetRollbackLdif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRollbackLdif` <a name="resetRollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif"></a>

```typescript
public resetRollbackLdif(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackendDynamicRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackendDynamicRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput">creationLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput">deletionLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput">rollbackLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif">creationLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif">deletionLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif">rollbackLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationLdifInput`<sup>Optional</sup> <a name="creationLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput"></a>

```typescript
public readonly creationLdifInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `deletionLdifInput`<sup>Optional</sup> <a name="deletionLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput"></a>

```typescript
public readonly deletionLdifInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `rollbackLdifInput`<sup>Optional</sup> <a name="rollbackLdifInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput"></a>

```typescript
public readonly rollbackLdifInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `creationLdif`<sup>Required</sup> <a name="creationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif"></a>

```typescript
public readonly creationLdif: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `deletionLdif`<sup>Required</sup> <a name="deletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif"></a>

```typescript
public readonly deletionLdif: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `rollbackLdif`<sup>Required</sup> <a name="rollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif"></a>

```typescript
public readonly rollbackLdif: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendDynamicRoleConfig <a name="LdapSecretBackendDynamicRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.Initializer"></a>

```typescript
import { ldapSecretBackendDynamicRole } from '@cdktf/provider-vault'

const ldapSecretBackendDynamicRoleConfig: ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif">creationLdif</a></code> | <code>string</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif">deletionLdif</a></code> | <code>string</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount">mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif">rollbackLdif</a></code> | <code>string</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | A template used to generate a dynamic username. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationLdif`<sup>Required</sup> <a name="creationLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif"></a>

```typescript
public readonly creationLdif: string;
```

- *Type:* string

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `deletionLdif`<sup>Required</sup> <a name="deletionLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif"></a>

```typescript
public readonly deletionLdif: string;
```

- *Type:* string

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `rollbackLdif`<sup>Optional</sup> <a name="rollbackLdif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif"></a>

```typescript
public readonly rollbackLdif: string;
```

- *Type:* string

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---



