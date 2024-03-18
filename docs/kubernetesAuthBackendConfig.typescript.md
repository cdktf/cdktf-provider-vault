# `kubernetesAuthBackendConfig` Submodule <a name="`kubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.kubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendConfig <a name="KubernetesAuthBackendConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

new kubernetesAuthBackendConfig.KubernetesAuthBackendConfig(scope: Construct, id: string, config: KubernetesAuthBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig">KubernetesAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig">KubernetesAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation">resetDisableIssValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys">resetPemKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt">resetTokenReviewerJwt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetDisableIssValidation` <a name="resetDisableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```typescript
public resetDisableIssValidation(): void
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```typescript
public resetDisableLocalCaJwt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```typescript
public resetKubernetesCaCert(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPemKeys` <a name="resetPemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys"></a>

```typescript
public resetPemKeys(): void
```

##### `resetTokenReviewerJwt` <a name="resetTokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt"></a>

```typescript
public resetTokenReviewerJwt(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput">disableIssValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput">pemKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput">tokenReviewerJwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys">pemKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt">tokenReviewerJwt</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disableIssValidationInput`<sup>Optional</sup> <a name="disableIssValidationInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```typescript
public readonly disableIssValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```typescript
public readonly disableLocalCaJwtInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```typescript
public readonly kubernetesCaCertInput: string;
```

- *Type:* string

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```typescript
public readonly kubernetesHostInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pemKeysInput`<sup>Optional</sup> <a name="pemKeysInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput"></a>

```typescript
public readonly pemKeysInput: string[];
```

- *Type:* string[]

---

##### `tokenReviewerJwtInput`<sup>Optional</sup> <a name="tokenReviewerJwtInput" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput"></a>

```typescript
public readonly tokenReviewerJwtInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disableIssValidation`<sup>Required</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation"></a>

```typescript
public readonly disableIssValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pemKeys`<sup>Required</sup> <a name="pemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys"></a>

```typescript
public readonly pemKeys: string[];
```

- *Type:* string[]

---

##### `tokenReviewerJwt`<sup>Required</sup> <a name="tokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt"></a>

```typescript
public readonly tokenReviewerJwt: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendConfigConfig <a name="KubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.Initializer"></a>

```typescript
import { kubernetesAuthBackendConfig } from '@cdktf/provider-vault'

const kubernetesAuthBackendConfigConfig: kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation">disableIssValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>string</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys">pemKeys</a></code> | <code>string[]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt">tokenReviewerJwt</a></code> | <code>string</code> | A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `disableIssValidation`<sup>Optional</sup> <a name="disableIssValidation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```typescript
public readonly disableIssValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `pemKeys`<sup>Optional</sup> <a name="pemKeys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```typescript
public readonly pemKeys: string[];
```

- *Type:* string[]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `tokenReviewerJwt`<sup>Optional</sup> <a name="tokenReviewerJwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt"></a>

```typescript
public readonly tokenReviewerJwt: string;
```

- *Type:* string

A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---



