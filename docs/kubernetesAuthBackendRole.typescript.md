# `kubernetesAuthBackendRole` Submodule <a name="`kubernetesAuthBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendRole <a name="KubernetesAuthBackendRole" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role vault_kubernetes_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

new kubernetesAuthBackendRole.KubernetesAuthBackendRole(scope: Construct, id: string, config: KubernetesAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig">KubernetesAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource">resetAliasNameSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasNameSource` <a name="resetAliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAliasNameSource"></a>

```typescript
public resetAliasNameSource(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput">aliasNameSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput">boundServiceAccountNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput">boundServiceAccountNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource">aliasNameSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames">boundServiceAccountNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces">boundServiceAccountNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasNameSourceInput`<sup>Optional</sup> <a name="aliasNameSourceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSourceInput"></a>

```typescript
public readonly aliasNameSourceInput: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `boundServiceAccountNamesInput`<sup>Optional</sup> <a name="boundServiceAccountNamesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamesInput"></a>

```typescript
public readonly boundServiceAccountNamesInput: string[];
```

- *Type:* string[]

---

##### `boundServiceAccountNamespacesInput`<sup>Optional</sup> <a name="boundServiceAccountNamespacesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespacesInput"></a>

```typescript
public readonly boundServiceAccountNamespacesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `aliasNameSource`<sup>Required</sup> <a name="aliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.aliasNameSource"></a>

```typescript
public readonly aliasNameSource: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `boundServiceAccountNames`<sup>Required</sup> <a name="boundServiceAccountNames" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNames"></a>

```typescript
public readonly boundServiceAccountNames: string[];
```

- *Type:* string[]

---

##### `boundServiceAccountNamespaces`<sup>Required</sup> <a name="boundServiceAccountNamespaces" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.boundServiceAccountNamespaces"></a>

```typescript
public readonly boundServiceAccountNamespaces: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendRoleConfig <a name="KubernetesAuthBackendRoleConfig" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.Initializer"></a>

```typescript
import { kubernetesAuthBackendRole } from '@cdktf/provider-vault'

const kubernetesAuthBackendRoleConfig: kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames">boundServiceAccountNames</a></code> | <code>string[]</code> | List of service account names able to access this role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces">boundServiceAccountNamespaces</a></code> | <code>string[]</code> | List of namespaces allowed to access this role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource">aliasNameSource</a></code> | <code>string</code> | Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience">audience</a></code> | <code>string</code> | Optional Audience claim to verify in the JWT. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `boundServiceAccountNames`<sup>Required</sup> <a name="boundServiceAccountNames" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNames"></a>

```typescript
public readonly boundServiceAccountNames: string[];
```

- *Type:* string[]

List of service account names able to access this role.

If set to `["*"]` all names are allowed, both this and bound_service_account_namespaces can not be "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_names KubernetesAuthBackendRole#bound_service_account_names}

---

##### `boundServiceAccountNamespaces`<sup>Required</sup> <a name="boundServiceAccountNamespaces" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.boundServiceAccountNamespaces"></a>

```typescript
public readonly boundServiceAccountNamespaces: string[];
```

- *Type:* string[]

List of namespaces allowed to access this role.

If set to `["*"]` all namespaces are allowed, both this and bound_service_account_names can not be set to "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#bound_service_account_namespaces KubernetesAuthBackendRole#bound_service_account_namespaces}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#role_name KubernetesAuthBackendRole#role_name}

---

##### `aliasNameSource`<sup>Optional</sup> <a name="aliasNameSource" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.aliasNameSource"></a>

```typescript
public readonly aliasNameSource: string;
```

- *Type:* string

Configures how identity aliases are generated. Valid choices are: serviceaccount_uid, serviceaccount_name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#alias_name_source KubernetesAuthBackendRole#alias_name_source}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Optional Audience claim to verify in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#audience KubernetesAuthBackendRole#audience}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#backend KubernetesAuthBackendRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#id KubernetesAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#namespace KubernetesAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_bound_cidrs KubernetesAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_explicit_max_ttl KubernetesAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_max_ttl KubernetesAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_no_default_policy KubernetesAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_num_uses KubernetesAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_period KubernetesAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_policies KubernetesAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_ttl KubernetesAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.kubernetesAuthBackendRole.KubernetesAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_role#token_type KubernetesAuthBackendRole#token_type}

---



