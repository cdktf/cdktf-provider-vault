# `vault_pki_secret_backend_crl_config`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_crl_config`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config).

# `pkiSecretBackendCrlConfig` Submodule <a name="`pkiSecretBackendCrlConfig` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCrlConfig <a name="PkiSecretBackendCrlConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

new pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig(scope: Construct, id: string, config: PkiSecretBackendCrlConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig">PkiSecretBackendCrlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild">resetAutoRebuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod">resetAutoRebuildGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation">resetCrossClusterRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval">resetDeltaRebuildInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta">resetEnableDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry">resetExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable">resetOcspDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry">resetOcspExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl">resetUnifiedCrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths">resetUnifiedCrlOnExistingPaths</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAutoRebuild` <a name="resetAutoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild"></a>

```typescript
public resetAutoRebuild(): void
```

##### `resetAutoRebuildGracePeriod` <a name="resetAutoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod"></a>

```typescript
public resetAutoRebuildGracePeriod(): void
```

##### `resetCrossClusterRevocation` <a name="resetCrossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation"></a>

```typescript
public resetCrossClusterRevocation(): void
```

##### `resetDeltaRebuildInterval` <a name="resetDeltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval"></a>

```typescript
public resetDeltaRebuildInterval(): void
```

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetEnableDelta` <a name="resetEnableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta"></a>

```typescript
public resetEnableDelta(): void
```

##### `resetExpiry` <a name="resetExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry"></a>

```typescript
public resetExpiry(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOcspDisable` <a name="resetOcspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable"></a>

```typescript
public resetOcspDisable(): void
```

##### `resetOcspExpiry` <a name="resetOcspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry"></a>

```typescript
public resetOcspExpiry(): void
```

##### `resetUnifiedCrl` <a name="resetUnifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl"></a>

```typescript
public resetUnifiedCrl(): void
```

##### `resetUnifiedCrlOnExistingPaths` <a name="resetUnifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths"></a>

```typescript
public resetUnifiedCrlOnExistingPaths(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendCrlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendCrlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCrlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput">autoRebuildGracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput">autoRebuildInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput">crossClusterRevocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput">deltaRebuildIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput">enableDeltaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput">expiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput">ocspDisableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput">ocspExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput">unifiedCrlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput">unifiedCrlOnExistingPathsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild">autoRebuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod">autoRebuildGracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation">crossClusterRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval">deltaRebuildInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta">enableDelta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable">ocspDisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry">ocspExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl">unifiedCrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths">unifiedCrlOnExistingPaths</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoRebuildGracePeriodInput`<sup>Optional</sup> <a name="autoRebuildGracePeriodInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput"></a>

```typescript
public readonly autoRebuildGracePeriodInput: string;
```

- *Type:* string

---

##### `autoRebuildInput`<sup>Optional</sup> <a name="autoRebuildInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput"></a>

```typescript
public readonly autoRebuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `crossClusterRevocationInput`<sup>Optional</sup> <a name="crossClusterRevocationInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput"></a>

```typescript
public readonly crossClusterRevocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deltaRebuildIntervalInput`<sup>Optional</sup> <a name="deltaRebuildIntervalInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput"></a>

```typescript
public readonly deltaRebuildIntervalInput: string;
```

- *Type:* string

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDeltaInput`<sup>Optional</sup> <a name="enableDeltaInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput"></a>

```typescript
public readonly enableDeltaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiryInput`<sup>Optional</sup> <a name="expiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput"></a>

```typescript
public readonly expiryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `ocspDisableInput`<sup>Optional</sup> <a name="ocspDisableInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput"></a>

```typescript
public readonly ocspDisableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspExpiryInput`<sup>Optional</sup> <a name="ocspExpiryInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput"></a>

```typescript
public readonly ocspExpiryInput: string;
```

- *Type:* string

---

##### `unifiedCrlInput`<sup>Optional</sup> <a name="unifiedCrlInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput"></a>

```typescript
public readonly unifiedCrlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unifiedCrlOnExistingPathsInput`<sup>Optional</sup> <a name="unifiedCrlOnExistingPathsInput" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput"></a>

```typescript
public readonly unifiedCrlOnExistingPathsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRebuild`<sup>Required</sup> <a name="autoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild"></a>

```typescript
public readonly autoRebuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRebuildGracePeriod`<sup>Required</sup> <a name="autoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod"></a>

```typescript
public readonly autoRebuildGracePeriod: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `crossClusterRevocation`<sup>Required</sup> <a name="crossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation"></a>

```typescript
public readonly crossClusterRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deltaRebuildInterval`<sup>Required</sup> <a name="deltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval"></a>

```typescript
public readonly deltaRebuildInterval: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDelta`<sup>Required</sup> <a name="enableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta"></a>

```typescript
public readonly enableDelta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `ocspDisable`<sup>Required</sup> <a name="ocspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable"></a>

```typescript
public readonly ocspDisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspExpiry`<sup>Required</sup> <a name="ocspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry"></a>

```typescript
public readonly ocspExpiry: string;
```

- *Type:* string

---

##### `unifiedCrl`<sup>Required</sup> <a name="unifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl"></a>

```typescript
public readonly unifiedCrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unifiedCrlOnExistingPaths`<sup>Required</sup> <a name="unifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths"></a>

```typescript
public readonly unifiedCrlOnExistingPaths: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCrlConfigConfig <a name="PkiSecretBackendCrlConfigConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.Initializer"></a>

```typescript
import { pkiSecretBackendCrlConfig } from '@cdktf/provider-vault'

const pkiSecretBackendCrlConfigConfig: pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend">backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild">autoRebuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod">autoRebuildGracePeriod</a></code> | <code>string</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation">crossClusterRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable cross-cluster revocation request queues. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval">deltaRebuildInterval</a></code> | <code>string</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta">enableDelta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry">expiry</a></code> | <code>string</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable">ocspDisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry">ocspExpiry</a></code> | <code>string</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl">unifiedCrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables unified CRL and OCSP building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths">unifiedCrlOnExistingPaths</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `autoRebuild`<sup>Optional</sup> <a name="autoRebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild"></a>

```typescript
public readonly autoRebuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `autoRebuildGracePeriod`<sup>Optional</sup> <a name="autoRebuildGracePeriod" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod"></a>

```typescript
public readonly autoRebuildGracePeriod: string;
```

- *Type:* string

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `crossClusterRevocation`<sup>Optional</sup> <a name="crossClusterRevocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation"></a>

```typescript
public readonly crossClusterRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable cross-cluster revocation request queues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#cross_cluster_revocation PkiSecretBackendCrlConfig#cross_cluster_revocation}

---

##### `deltaRebuildInterval`<sup>Optional</sup> <a name="deltaRebuildInterval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval"></a>

```typescript
public readonly deltaRebuildInterval: string;
```

- *Type:* string

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `enableDelta`<sup>Optional</sup> <a name="enableDelta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta"></a>

```typescript
public readonly enableDelta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `ocspDisable`<sup>Optional</sup> <a name="ocspDisable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable"></a>

```typescript
public readonly ocspDisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `ocspExpiry`<sup>Optional</sup> <a name="ocspExpiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry"></a>

```typescript
public readonly ocspExpiry: string;
```

- *Type:* string

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---

##### `unifiedCrl`<sup>Optional</sup> <a name="unifiedCrl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl"></a>

```typescript
public readonly unifiedCrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables unified CRL and OCSP building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#unified_crl PkiSecretBackendCrlConfig#unified_crl}

---

##### `unifiedCrlOnExistingPaths`<sup>Optional</sup> <a name="unifiedCrlOnExistingPaths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths"></a>

```typescript
public readonly unifiedCrlOnExistingPaths: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_crl_config#unified_crl_on_existing_paths PkiSecretBackendCrlConfig#unified_crl_on_existing_paths}

---



