# `samlAuthBackend` Submodule <a name="`samlAuthBackend` Submodule" id="@cdktf/provider-vault.samlAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackend <a name="SamlAuthBackend" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend vault_saml_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

new samlAuthBackend.SamlAuthBackend(scope: Construct, id: string, config: SamlAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig">SamlAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert">resetIdpCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId">resetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl">resetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging">resetVerboseLogging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole"></a>

```typescript
public resetDefaultRole(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpCert` <a name="resetIdpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert"></a>

```typescript
public resetIdpCert(): void
```

##### `resetIdpEntityId` <a name="resetIdpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId"></a>

```typescript
public resetIdpEntityId(): void
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl"></a>

```typescript
public resetIdpMetadataUrl(): void
```

##### `resetIdpSsoUrl` <a name="resetIdpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl"></a>

```typescript
public resetIdpSsoUrl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetVerboseLogging` <a name="resetVerboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging"></a>

```typescript
public resetVerboseLogging(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

samlAuthBackend.SamlAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

samlAuthBackend.SamlAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

samlAuthBackend.SamlAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

samlAuthBackend.SamlAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SamlAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput">acsUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput">defaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput">idpCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput">idpSsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput">verboseLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls">acsUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole">defaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert">idpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl">idpSsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging">verboseLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acsUrlsInput`<sup>Optional</sup> <a name="acsUrlsInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput"></a>

```typescript
public readonly acsUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput"></a>

```typescript
public readonly defaultRoleInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpCertInput`<sup>Optional</sup> <a name="idpCertInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput"></a>

```typescript
public readonly idpCertInput: string;
```

- *Type:* string

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput"></a>

```typescript
public readonly idpEntityIdInput: string;
```

- *Type:* string

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput"></a>

```typescript
public readonly idpMetadataUrlInput: string;
```

- *Type:* string

---

##### `idpSsoUrlInput`<sup>Optional</sup> <a name="idpSsoUrlInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput"></a>

```typescript
public readonly idpSsoUrlInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `verboseLoggingInput`<sup>Optional</sup> <a name="verboseLoggingInput" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput"></a>

```typescript
public readonly verboseLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acsUrls`<sup>Required</sup> <a name="acsUrls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls"></a>

```typescript
public readonly acsUrls: string[];
```

- *Type:* string[]

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert"></a>

```typescript
public readonly idpCert: string;
```

- *Type:* string

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

---

##### `idpSsoUrl`<sup>Required</sup> <a name="idpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl"></a>

```typescript
public readonly idpSsoUrl: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `verboseLogging`<sup>Required</sup> <a name="verboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging"></a>

```typescript
public readonly verboseLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendConfig <a name="SamlAuthBackendConfig" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.Initializer"></a>

```typescript
import { samlAuthBackend } from '@cdktf/provider-vault'

const samlAuthBackendConfig: samlAuthBackend.SamlAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls">acsUrls</a></code> | <code>string[]</code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId">entityId</a></code> | <code>string</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole">defaultRole</a></code> | <code>string</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert">idpCert</a></code> | <code>string</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>string</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl">idpSsoUrl</a></code> | <code>string</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path">path</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging">verboseLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acsUrls`<sup>Required</sup> <a name="acsUrls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls"></a>

```typescript
public readonly acsUrls: string[];
```

- *Type:* string[]

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpCert`<sup>Optional</sup> <a name="idpCert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert"></a>

```typescript
public readonly idpCert: string;
```

- *Type:* string

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `idpEntityId`<sup>Optional</sup> <a name="idpEntityId" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl"></a>

```typescript
public readonly idpMetadataUrl: string;
```

- *Type:* string

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `idpSsoUrl`<sup>Optional</sup> <a name="idpSsoUrl" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl"></a>

```typescript
public readonly idpSsoUrl: string;
```

- *Type:* string

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `verboseLogging`<sup>Optional</sup> <a name="verboseLogging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging"></a>

```typescript
public readonly verboseLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---



