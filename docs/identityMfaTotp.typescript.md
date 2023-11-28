# `identityMfaTotp` Submodule <a name="`identityMfaTotp` Submodule" id="@cdktf/provider-vault.identityMfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaTotp <a name="IdentityMfaTotp" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp vault_identity_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

new identityMfaTotp.IdentityMfaTotp(scope: Construct, id: string, config: IdentityMfaTotpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig">IdentityMfaTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts">resetMaxValidationAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize">resetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew">resetSkew</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetDigits` <a name="resetDigits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits"></a>

```typescript
public resetDigits(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetMaxValidationAttempts` <a name="resetMaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts"></a>

```typescript
public resetMaxValidationAttempts(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetQrSize` <a name="resetQrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize"></a>

```typescript
public resetQrSize(): void
```

##### `resetSkew` <a name="resetSkew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew"></a>

```typescript
public resetSkew(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

identityMfaTotp.IdentityMfaTotp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

identityMfaTotp.IdentityMfaTotp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

identityMfaTotp.IdentityMfaTotp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

identityMfaTotp.IdentityMfaTotp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMfaTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId">methodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput">digitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput">maxValidationAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput">qrSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput">skewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits">digits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize">qrSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew">skew</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `methodId`<sup>Required</sup> <a name="methodId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId"></a>

```typescript
public readonly methodId: string;
```

- *Type:* string

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput"></a>

```typescript
public readonly digitsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `maxValidationAttemptsInput`<sup>Optional</sup> <a name="maxValidationAttemptsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput"></a>

```typescript
public readonly maxValidationAttemptsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `qrSizeInput`<sup>Optional</sup> <a name="qrSizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput"></a>

```typescript
public readonly qrSizeInput: number;
```

- *Type:* number

---

##### `skewInput`<sup>Optional</sup> <a name="skewInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput"></a>

```typescript
public readonly skewInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `maxValidationAttempts`<sup>Required</sup> <a name="maxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts"></a>

```typescript
public readonly maxValidationAttempts: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `qrSize`<sup>Required</sup> <a name="qrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize"></a>

```typescript
public readonly qrSize: number;
```

- *Type:* number

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew"></a>

```typescript
public readonly skew: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaTotpConfig <a name="IdentityMfaTotpConfig" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.Initializer"></a>

```typescript
import { identityMfaTotp } from '@cdktf/provider-vault'

const identityMfaTotpConfig: identityMfaTotp.IdentityMfaTotpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer">issuer</a></code> | <code>string</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm">algorithm</a></code> | <code>string</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits">digits</a></code> | <code>number</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize">keySize</a></code> | <code>number</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>number</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period">period</a></code> | <code>number</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize">qrSize</a></code> | <code>number</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew">skew</a></code> | <code>number</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `maxValidationAttempts`<sup>Optional</sup> <a name="maxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts"></a>

```typescript
public readonly maxValidationAttempts: number;
```

- *Type:* number

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `qrSize`<sup>Optional</sup> <a name="qrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize"></a>

```typescript
public readonly qrSize: number;
```

- *Type:* number

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew"></a>

```typescript
public readonly skew: number;
```

- *Type:* number

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---



