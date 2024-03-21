# `awsAuthBackendRoleTag` Submodule <a name="`awsAuthBackendRoleTag` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoleTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoleTag <a name="AwsAuthBackendRoleTag" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag vault_aws_auth_backend_role_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

new awsAuthBackendRoleTag.AwsAuthBackendRoleTag(scope: Construct, id: string, config: AwsAuthBackendRoleTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig">AwsAuthBackendRoleTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig">AwsAuthBackendRoleTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration">resetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication">resetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowInstanceMigration` <a name="resetAllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration"></a>

```typescript
public resetAllowInstanceMigration(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetDisallowReauthentication` <a name="resetDisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication"></a>

```typescript
public resetDisallowReauthentication(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendRoleTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsAuthBackendRoleTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendRoleTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendRoleTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRoleTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput">allowInstanceMigrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput">disallowReauthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication">disallowReauthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `allowInstanceMigrationInput`<sup>Optional</sup> <a name="allowInstanceMigrationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput"></a>

```typescript
public readonly allowInstanceMigrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disallowReauthenticationInput`<sup>Optional</sup> <a name="disallowReauthenticationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput"></a>

```typescript
public readonly disallowReauthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `allowInstanceMigration`<sup>Required</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration"></a>

```typescript
public readonly allowInstanceMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disallowReauthentication`<sup>Required</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication"></a>

```typescript
public readonly disallowReauthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleTagConfig <a name="AwsAuthBackendRoleTagConfig" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.Initializer"></a>

```typescript
import { awsAuthBackendRoleTag } from '@cdktf/provider-vault'

const awsAuthBackendRoleTagConfig: awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role">role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend">backend</a></code> | <code>string</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication">disallowReauthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl">maxTtl</a></code> | <code>string</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies">policies</a></code> | <code>string[]</code> | Policies to be associated with the tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `allowInstanceMigration`<sup>Optional</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration"></a>

```typescript
public readonly allowInstanceMigration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `disallowReauthentication`<sup>Optional</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication"></a>

```typescript
public readonly disallowReauthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---



