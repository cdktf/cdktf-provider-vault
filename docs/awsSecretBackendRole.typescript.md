# `awsSecretBackendRole` Submodule <a name="`awsSecretBackendRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendRole <a name="AwsSecretBackendRole" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

new awsSecretBackendRole.AwsSecretBackendRole(scope: Construct, id: string, config: AwsSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig">AwsSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl">resetDefaultStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups">resetIamGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamTags">resetIamTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl">resetMaxStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn">resetPermissionsBoundaryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns">resetPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns">resetRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetSessionTags">resetSessionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath">resetUserPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultStsTtl` <a name="resetDefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl"></a>

```typescript
public resetDefaultStsTtl(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetIamGroups` <a name="resetIamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups"></a>

```typescript
public resetIamGroups(): void
```

##### `resetIamTags` <a name="resetIamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamTags"></a>

```typescript
public resetIamTags(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxStsTtl` <a name="resetMaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl"></a>

```typescript
public resetMaxStsTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPermissionsBoundaryArn` <a name="resetPermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn"></a>

```typescript
public resetPermissionsBoundaryArn(): void
```

##### `resetPolicyArns` <a name="resetPolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns"></a>

```typescript
public resetPolicyArns(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetRoleArns` <a name="resetRoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns"></a>

```typescript
public resetRoleArns(): void
```

##### `resetSessionTags` <a name="resetSessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetSessionTags"></a>

```typescript
public resetSessionTags(): void
```

##### `resetUserPath` <a name="resetUserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath"></a>

```typescript
public resetUserPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

awsSecretBackendRole.AwsSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput">defaultStsTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput">iamGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTagsInput">iamTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput">maxStsTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput">permissionsBoundaryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput">policyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput">roleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTagsInput">sessionTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput">userPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl">defaultStsTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups">iamGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTags">iamTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl">maxStsTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns">roleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTags">sessionTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath">userPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `defaultStsTtlInput`<sup>Optional</sup> <a name="defaultStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput"></a>

```typescript
public readonly defaultStsTtlInput: number;
```

- *Type:* number

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `iamGroupsInput`<sup>Optional</sup> <a name="iamGroupsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput"></a>

```typescript
public readonly iamGroupsInput: string[];
```

- *Type:* string[]

---

##### `iamTagsInput`<sup>Optional</sup> <a name="iamTagsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTagsInput"></a>

```typescript
public readonly iamTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxStsTtlInput`<sup>Optional</sup> <a name="maxStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput"></a>

```typescript
public readonly maxStsTtlInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `permissionsBoundaryArnInput`<sup>Optional</sup> <a name="permissionsBoundaryArnInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput"></a>

```typescript
public readonly permissionsBoundaryArnInput: string;
```

- *Type:* string

---

##### `policyArnsInput`<sup>Optional</sup> <a name="policyArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput"></a>

```typescript
public readonly policyArnsInput: string[];
```

- *Type:* string[]

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `roleArnsInput`<sup>Optional</sup> <a name="roleArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput"></a>

```typescript
public readonly roleArnsInput: string[];
```

- *Type:* string[]

---

##### `sessionTagsInput`<sup>Optional</sup> <a name="sessionTagsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTagsInput"></a>

```typescript
public readonly sessionTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userPathInput`<sup>Optional</sup> <a name="userPathInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput"></a>

```typescript
public readonly userPathInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `defaultStsTtl`<sup>Required</sup> <a name="defaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl"></a>

```typescript
public readonly defaultStsTtl: number;
```

- *Type:* number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `iamGroups`<sup>Required</sup> <a name="iamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups"></a>

```typescript
public readonly iamGroups: string[];
```

- *Type:* string[]

---

##### `iamTags`<sup>Required</sup> <a name="iamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamTags"></a>

```typescript
public readonly iamTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxStsTtl`<sup>Required</sup> <a name="maxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl"></a>

```typescript
public readonly maxStsTtl: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="permissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns"></a>

```typescript
public readonly roleArns: string[];
```

- *Type:* string[]

---

##### `sessionTags`<sup>Required</sup> <a name="sessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.sessionTags"></a>

```typescript
public readonly sessionTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userPath`<sup>Required</sup> <a name="userPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath"></a>

```typescript
public readonly userPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendRoleConfig <a name="AwsSecretBackendRoleConfig" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.Initializer"></a>

```typescript
import { awsSecretBackendRole } from '@cdktf/provider-vault'

const awsSecretBackendRoleConfig: awsSecretBackendRole.AwsSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType">credentialType</a></code> | <code>string</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl">defaultStsTtl</a></code> | <code>number</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.externalId">externalId</a></code> | <code>string</code> | External ID to set for assume role creds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups">iamGroups</a></code> | <code>string[]</code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamTags">iamTags</a></code> | <code>{[ key: string ]: string}</code> | A map of strings representing key/value pairs used as tags for any IAM user created by this role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl">maxStsTtl</a></code> | <code>number</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>string</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns">policyArns</a></code> | <code>string[]</code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns">roleArns</a></code> | <code>string[]</code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.sessionTags">sessionTags</a></code> | <code>{[ key: string ]: string}</code> | Session tags to be set for assume role creds created. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath">userPath</a></code> | <code>string</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `defaultStsTtl`<sup>Optional</sup> <a name="defaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl"></a>

```typescript
public readonly defaultStsTtl: number;
```

- *Type:* number

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID to set for assume role creds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#external_id AwsSecretBackendRole#external_id}

---

##### `iamGroups`<sup>Optional</sup> <a name="iamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups"></a>

```typescript
public readonly iamGroups: string[];
```

- *Type:* string[]

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `iamTags`<sup>Optional</sup> <a name="iamTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamTags"></a>

```typescript
public readonly iamTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of strings representing key/value pairs used as tags for any IAM user created by this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#iam_tags AwsSecretBackendRole#iam_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxStsTtl`<sup>Optional</sup> <a name="maxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl"></a>

```typescript
public readonly maxStsTtl: number;
```

- *Type:* number

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn"></a>

```typescript
public readonly permissionsBoundaryArn: string;
```

- *Type:* string

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `roleArns`<sup>Optional</sup> <a name="roleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns"></a>

```typescript
public readonly roleArns: string[];
```

- *Type:* string[]

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `sessionTags`<sup>Optional</sup> <a name="sessionTags" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.sessionTags"></a>

```typescript
public readonly sessionTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Session tags to be set for assume role creds created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#session_tags AwsSecretBackendRole#session_tags}

---

##### `userPath`<sup>Optional</sup> <a name="userPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath"></a>

```typescript
public readonly userPath: string;
```

- *Type:* string

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---



