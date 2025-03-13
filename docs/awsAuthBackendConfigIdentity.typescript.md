# `awsAuthBackendConfigIdentity` Submodule <a name="`awsAuthBackendConfigIdentity` Submodule" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendConfigIdentity <a name="AwsAuthBackendConfigIdentity" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity vault_aws_auth_backend_config_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

new awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity(scope: Construct, id: string, config?: AwsAuthBackendConfigIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig">AwsAuthBackendConfigIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias">resetEc2Alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata">resetEc2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias">resetIamAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata">resetIamMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetEc2Alias` <a name="resetEc2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Alias"></a>

```typescript
public resetEc2Alias(): void
```

##### `resetEc2Metadata` <a name="resetEc2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetEc2Metadata"></a>

```typescript
public resetEc2Metadata(): void
```

##### `resetIamAlias` <a name="resetIamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamAlias"></a>

```typescript
public resetIamAlias(): void
```

##### `resetIamMetadata` <a name="resetIamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetIamMetadata"></a>

```typescript
public resetIamMetadata(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsAuthBackendConfigIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendConfigIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendConfigIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendConfigIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput">ec2AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput">ec2MetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput">iamAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput">iamMetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias">ec2Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata">ec2Metadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias">iamAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata">iamMetadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `ec2AliasInput`<sup>Optional</sup> <a name="ec2AliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2AliasInput"></a>

```typescript
public readonly ec2AliasInput: string;
```

- *Type:* string

---

##### `ec2MetadataInput`<sup>Optional</sup> <a name="ec2MetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2MetadataInput"></a>

```typescript
public readonly ec2MetadataInput: string[];
```

- *Type:* string[]

---

##### `iamAliasInput`<sup>Optional</sup> <a name="iamAliasInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAliasInput"></a>

```typescript
public readonly iamAliasInput: string;
```

- *Type:* string

---

##### `iamMetadataInput`<sup>Optional</sup> <a name="iamMetadataInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadataInput"></a>

```typescript
public readonly iamMetadataInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `ec2Alias`<sup>Required</sup> <a name="ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Alias"></a>

```typescript
public readonly ec2Alias: string;
```

- *Type:* string

---

##### `ec2Metadata`<sup>Required</sup> <a name="ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.ec2Metadata"></a>

```typescript
public readonly ec2Metadata: string[];
```

- *Type:* string[]

---

##### `iamAlias`<sup>Required</sup> <a name="iamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamAlias"></a>

```typescript
public readonly iamAlias: string;
```

- *Type:* string

---

##### `iamMetadata`<sup>Required</sup> <a name="iamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.iamMetadata"></a>

```typescript
public readonly iamMetadata: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendConfigIdentityConfig <a name="AwsAuthBackendConfigIdentityConfig" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.Initializer"></a>

```typescript
import { awsAuthBackendConfigIdentity } from '@cdktf/provider-vault'

const awsAuthBackendConfigIdentityConfig: awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias">ec2Alias</a></code> | <code>string</code> | Configures how to generate the identity alias when using the ec2 auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata">ec2Metadata</a></code> | <code>string[]</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias">iamAlias</a></code> | <code>string</code> | How to generate the identity alias when using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata">iamMetadata</a></code> | <code>string[]</code> | The metadata to include on the token returned by the login endpoint. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#backend AwsAuthBackendConfigIdentity#backend}

---

##### `ec2Alias`<sup>Optional</sup> <a name="ec2Alias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Alias"></a>

```typescript
public readonly ec2Alias: string;
```

- *Type:* string

Configures how to generate the identity alias when using the ec2 auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#ec2_alias AwsAuthBackendConfigIdentity#ec2_alias}

---

##### `ec2Metadata`<sup>Optional</sup> <a name="ec2Metadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.ec2Metadata"></a>

```typescript
public readonly ec2Metadata: string[];
```

- *Type:* string[]

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#ec2_metadata AwsAuthBackendConfigIdentity#ec2_metadata}

---

##### `iamAlias`<sup>Optional</sup> <a name="iamAlias" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamAlias"></a>

```typescript
public readonly iamAlias: string;
```

- *Type:* string

How to generate the identity alias when using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#iam_alias AwsAuthBackendConfigIdentity#iam_alias}

---

##### `iamMetadata`<sup>Optional</sup> <a name="iamMetadata" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.iamMetadata"></a>

```typescript
public readonly iamMetadata: string[];
```

- *Type:* string[]

The metadata to include on the token returned by the login endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#iam_metadata AwsAuthBackendConfigIdentity#iam_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#id AwsAuthBackendConfigIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendConfigIdentity.AwsAuthBackendConfigIdentityConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_config_identity#namespace AwsAuthBackendConfigIdentity#namespace}

---



