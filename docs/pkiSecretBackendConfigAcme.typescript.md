# `pkiSecretBackendConfigAcme` Submodule <a name="`pkiSecretBackendConfigAcme` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAcme <a name="PkiSecretBackendConfigAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

new pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme(scope: Construct, id: string, config: PkiSecretBackendConfigAcmeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig">PkiSecretBackendConfigAcmeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers">resetAllowedIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage">resetAllowRoleExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy">resetDefaultDirectoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver">resetDnsResolver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy">resetEabPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedIssuers` <a name="resetAllowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers"></a>

```typescript
public resetAllowedIssuers(): void
```

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetAllowRoleExtKeyUsage` <a name="resetAllowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage"></a>

```typescript
public resetAllowRoleExtKeyUsage(): void
```

##### `resetDefaultDirectoryPolicy` <a name="resetDefaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy"></a>

```typescript
public resetDefaultDirectoryPolicy(): void
```

##### `resetDnsResolver` <a name="resetDnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver"></a>

```typescript
public resetDnsResolver(): void
```

##### `resetEabPolicy` <a name="resetEabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy"></a>

```typescript
public resetEabPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigAcme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigAcme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAcme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput">allowedIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput">allowRoleExtKeyUsageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput">defaultDirectoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput">dnsResolverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput">eabPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers">allowedIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage">allowRoleExtKeyUsage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy">defaultDirectoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver">dnsResolver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy">eabPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedIssuersInput`<sup>Optional</sup> <a name="allowedIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput"></a>

```typescript
public readonly allowedIssuersInput: string[];
```

- *Type:* string[]

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `allowRoleExtKeyUsageInput`<sup>Optional</sup> <a name="allowRoleExtKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput"></a>

```typescript
public readonly allowRoleExtKeyUsageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `defaultDirectoryPolicyInput`<sup>Optional</sup> <a name="defaultDirectoryPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput"></a>

```typescript
public readonly defaultDirectoryPolicyInput: string;
```

- *Type:* string

---

##### `dnsResolverInput`<sup>Optional</sup> <a name="dnsResolverInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput"></a>

```typescript
public readonly dnsResolverInput: string;
```

- *Type:* string

---

##### `eabPolicyInput`<sup>Optional</sup> <a name="eabPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput"></a>

```typescript
public readonly eabPolicyInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `allowedIssuers`<sup>Required</sup> <a name="allowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers"></a>

```typescript
public readonly allowedIssuers: string[];
```

- *Type:* string[]

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `allowRoleExtKeyUsage`<sup>Required</sup> <a name="allowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage"></a>

```typescript
public readonly allowRoleExtKeyUsage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `defaultDirectoryPolicy`<sup>Required</sup> <a name="defaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy"></a>

```typescript
public readonly defaultDirectoryPolicy: string;
```

- *Type:* string

---

##### `dnsResolver`<sup>Required</sup> <a name="dnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver"></a>

```typescript
public readonly dnsResolver: string;
```

- *Type:* string

---

##### `eabPolicy`<sup>Required</sup> <a name="eabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy"></a>

```typescript
public readonly eabPolicy: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAcmeConfig <a name="PkiSecretBackendConfigAcmeConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.Initializer"></a>

```typescript
import { pkiSecretBackendConfigAcme } from '@cdktf/provider-vault'

const pkiSecretBackendConfigAcmeConfig: pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend">backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether ACME is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers">allowedIssuers</a></code> | <code>string[]</code> | Specifies which issuers are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | Specifies which roles are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage">allowRoleExtKeyUsage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the ExtKeyUsage field from a role is used. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy">defaultDirectoryPolicy</a></code> | <code>string</code> | Specifies the policy to be used for non-role-qualified ACME requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver">dnsResolver</a></code> | <code>string</code> | DNS resolver to use for domain resolution on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy">eabPolicy</a></code> | <code>string</code> | Specifies the policy to use for external account binding behaviour. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum TTL in seconds for certificates issued by ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether ACME is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}

---

##### `allowedIssuers`<sup>Optional</sup> <a name="allowedIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers"></a>

```typescript
public readonly allowedIssuers: string[];
```

- *Type:* string[]

Specifies which issuers are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

Specifies which roles are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}

---

##### `allowRoleExtKeyUsage`<sup>Optional</sup> <a name="allowRoleExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage"></a>

```typescript
public readonly allowRoleExtKeyUsage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the ExtKeyUsage field from a role is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}

---

##### `defaultDirectoryPolicy`<sup>Optional</sup> <a name="defaultDirectoryPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy"></a>

```typescript
public readonly defaultDirectoryPolicy: string;
```

- *Type:* string

Specifies the policy to be used for non-role-qualified ACME requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}

---

##### `dnsResolver`<sup>Optional</sup> <a name="dnsResolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver"></a>

```typescript
public readonly dnsResolver: string;
```

- *Type:* string

DNS resolver to use for domain resolution on this mount.

Must be in the format <host>:<port>, with both parts mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}

---

##### `eabPolicy`<sup>Optional</sup> <a name="eabPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy"></a>

```typescript
public readonly eabPolicy: string;
```

- *Type:* string

Specifies the policy to use for external account binding behaviour.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum TTL in seconds for certificates issued by ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}

---



