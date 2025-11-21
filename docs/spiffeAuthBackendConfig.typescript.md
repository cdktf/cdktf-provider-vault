# `spiffeAuthBackendConfig` Submodule <a name="`spiffeAuthBackendConfig` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendConfig <a name="SpiffeAuthBackendConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

new spiffeAuthBackendConfig.SpiffeAuthBackendConfig(scope: Construct, id: string, config: SpiffeAuthBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig">SpiffeAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle">resetBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch">resetDeferBundleFetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem">resetEndpointRootCaTruststorePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId">resetEndpointSpiffeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetBundle` <a name="resetBundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle"></a>

```typescript
public resetBundle(): void
```

##### `resetDeferBundleFetch` <a name="resetDeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch"></a>

```typescript
public resetDeferBundleFetch(): void
```

##### `resetEndpointRootCaTruststorePem` <a name="resetEndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem"></a>

```typescript
public resetEndpointRootCaTruststorePem(): void
```

##### `resetEndpointSpiffeId` <a name="resetEndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId"></a>

```typescript
public resetEndpointSpiffeId(): void
```

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput">audienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput">bundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput">deferBundleFetchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput">endpointRootCaTruststorePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput">endpointSpiffeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput">endpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput">trustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience">audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle">bundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch">deferBundleFetch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem">endpointRootCaTruststorePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId">endpointSpiffeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain">trustDomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput"></a>

```typescript
public readonly audienceInput: string[];
```

- *Type:* string[]

---

##### `bundleInput`<sup>Optional</sup> <a name="bundleInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput"></a>

```typescript
public readonly bundleInput: string;
```

- *Type:* string

---

##### `deferBundleFetchInput`<sup>Optional</sup> <a name="deferBundleFetchInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput"></a>

```typescript
public readonly deferBundleFetchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointRootCaTruststorePemInput`<sup>Optional</sup> <a name="endpointRootCaTruststorePemInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput"></a>

```typescript
public readonly endpointRootCaTruststorePemInput: string;
```

- *Type:* string

---

##### `endpointSpiffeIdInput`<sup>Optional</sup> <a name="endpointSpiffeIdInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput"></a>

```typescript
public readonly endpointSpiffeIdInput: string;
```

- *Type:* string

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `trustDomainInput`<sup>Optional</sup> <a name="trustDomainInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput"></a>

```typescript
public readonly trustDomainInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle"></a>

```typescript
public readonly bundle: string;
```

- *Type:* string

---

##### `deferBundleFetch`<sup>Required</sup> <a name="deferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch"></a>

```typescript
public readonly deferBundleFetch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointRootCaTruststorePem`<sup>Required</sup> <a name="endpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem"></a>

```typescript
public readonly endpointRootCaTruststorePem: string;
```

- *Type:* string

---

##### `endpointSpiffeId`<sup>Required</sup> <a name="endpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId"></a>

```typescript
public readonly endpointSpiffeId: string;
```

- *Type:* string

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendConfigConfig <a name="SpiffeAuthBackendConfigConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.Initializer"></a>

```typescript
import { spiffeAuthBackendConfig } from '@cdktf/provider-vault'

const spiffeAuthBackendConfigConfig: spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile">profile</a></code> | <code>string</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain">trustDomain</a></code> | <code>string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience">audience</a></code> | <code>string[]</code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle">bundle</a></code> | <code>string</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch">deferBundleFetch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem">endpointRootCaTruststorePem</a></code> | <code>string</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId">endpointSpiffeId</a></code> | <code>string</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `bundle`<sup>Optional</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle"></a>

```typescript
public readonly bundle: string;
```

- *Type:* string

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `deferBundleFetch`<sup>Optional</sup> <a name="deferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch"></a>

```typescript
public readonly deferBundleFetch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `endpointRootCaTruststorePem`<sup>Optional</sup> <a name="endpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem"></a>

```typescript
public readonly endpointRootCaTruststorePem: string;
```

- *Type:* string

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `endpointSpiffeId`<sup>Optional</sup> <a name="endpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId"></a>

```typescript
public readonly endpointSpiffeId: string;
```

- *Type:* string

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---



