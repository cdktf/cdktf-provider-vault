# `pkiSecretBackendIssuer` Submodule <a name="`pkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIssuer <a name="PkiSecretBackendIssuer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

new pkiSecretBackendIssuer.PkiSecretBackendIssuer(scope: Construct, id: string, config: PkiSecretBackendIssuerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig">PkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints">resetCrlDistributionPoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating">resetEnableAiaUrlTemplating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName">resetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates">resetIssuingCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior">resetLeafNotAfterBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain">resetManualChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers">resetOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm">resetRevocationSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage">resetUsage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCrlDistributionPoints` <a name="resetCrlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints"></a>

```typescript
public resetCrlDistributionPoints(): void
```

##### `resetEnableAiaUrlTemplating` <a name="resetEnableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating"></a>

```typescript
public resetEnableAiaUrlTemplating(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerName` <a name="resetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName"></a>

```typescript
public resetIssuerName(): void
```

##### `resetIssuingCertificates` <a name="resetIssuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates"></a>

```typescript
public resetIssuingCertificates(): void
```

##### `resetLeafNotAfterBehavior` <a name="resetLeafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior"></a>

```typescript
public resetLeafNotAfterBehavior(): void
```

##### `resetManualChain` <a name="resetManualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain"></a>

```typescript
public resetManualChain(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOcspServers` <a name="resetOcspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers"></a>

```typescript
public resetOcspServers(): void
```

##### `resetRevocationSignatureAlgorithm` <a name="resetRevocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm"></a>

```typescript
public resetRevocationSignatureAlgorithm(): void
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage"></a>

```typescript
public resetUsage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId">issuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput">crlDistributionPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput">enableAiaUrlTemplatingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput">issuerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput">issuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput">issuingCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput">leafNotAfterBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput">manualChainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput">ocspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput">revocationSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput">usageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating">enableAiaUrlTemplating</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName">issuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef">issuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates">issuingCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain">manualChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers">ocspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm">revocationSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage">usage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId"></a>

```typescript
public readonly issuerId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `crlDistributionPointsInput`<sup>Optional</sup> <a name="crlDistributionPointsInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput"></a>

```typescript
public readonly crlDistributionPointsInput: string[];
```

- *Type:* string[]

---

##### `enableAiaUrlTemplatingInput`<sup>Optional</sup> <a name="enableAiaUrlTemplatingInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput"></a>

```typescript
public readonly enableAiaUrlTemplatingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerNameInput`<sup>Optional</sup> <a name="issuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput"></a>

```typescript
public readonly issuerNameInput: string;
```

- *Type:* string

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput"></a>

```typescript
public readonly issuerRefInput: string;
```

- *Type:* string

---

##### `issuingCertificatesInput`<sup>Optional</sup> <a name="issuingCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput"></a>

```typescript
public readonly issuingCertificatesInput: string[];
```

- *Type:* string[]

---

##### `leafNotAfterBehaviorInput`<sup>Optional</sup> <a name="leafNotAfterBehaviorInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput"></a>

```typescript
public readonly leafNotAfterBehaviorInput: string;
```

- *Type:* string

---

##### `manualChainInput`<sup>Optional</sup> <a name="manualChainInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput"></a>

```typescript
public readonly manualChainInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `ocspServersInput`<sup>Optional</sup> <a name="ocspServersInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput"></a>

```typescript
public readonly ocspServersInput: string[];
```

- *Type:* string[]

---

##### `revocationSignatureAlgorithmInput`<sup>Optional</sup> <a name="revocationSignatureAlgorithmInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput"></a>

```typescript
public readonly revocationSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput"></a>

```typescript
public readonly usageInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `crlDistributionPoints`<sup>Required</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints"></a>

```typescript
public readonly crlDistributionPoints: string[];
```

- *Type:* string[]

---

##### `enableAiaUrlTemplating`<sup>Required</sup> <a name="enableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating"></a>

```typescript
public readonly enableAiaUrlTemplating: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

---

##### `issuingCertificates`<sup>Required</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates"></a>

```typescript
public readonly issuingCertificates: string[];
```

- *Type:* string[]

---

##### `leafNotAfterBehavior`<sup>Required</sup> <a name="leafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```typescript
public readonly leafNotAfterBehavior: string;
```

- *Type:* string

---

##### `manualChain`<sup>Required</sup> <a name="manualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain"></a>

```typescript
public readonly manualChain: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `ocspServers`<sup>Required</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers"></a>

```typescript
public readonly ocspServers: string[];
```

- *Type:* string[]

---

##### `revocationSignatureAlgorithm`<sup>Required</sup> <a name="revocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm"></a>

```typescript
public readonly revocationSignatureAlgorithm: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIssuerConfig <a name="PkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.Initializer"></a>

```typescript
import { pkiSecretBackendIssuer } from '@cdktf/provider-vault'

const pkiSecretBackendIssuerConfig: pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend">backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef">issuerRef</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints">crlDistributionPoints</a></code> | <code>string[]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating">enableAiaUrlTemplating</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName">issuerName</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates">issuingCertificates</a></code> | <code>string[]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>string</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain">manualChain</a></code> | <code>string[]</code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers">ocspServers</a></code> | <code>string[]</code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm">revocationSignatureAlgorithm</a></code> | <code>string</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage">usage</a></code> | <code>string</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `crlDistributionPoints`<sup>Optional</sup> <a name="crlDistributionPoints" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints"></a>

```typescript
public readonly crlDistributionPoints: string[];
```

- *Type:* string[]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `enableAiaUrlTemplating`<sup>Optional</sup> <a name="enableAiaUrlTemplating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating"></a>

```typescript
public readonly enableAiaUrlTemplating: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `issuingCertificates`<sup>Optional</sup> <a name="issuingCertificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates"></a>

```typescript
public readonly issuingCertificates: string[];
```

- *Type:* string[]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `leafNotAfterBehavior`<sup>Optional</sup> <a name="leafNotAfterBehavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior"></a>

```typescript
public readonly leafNotAfterBehavior: string;
```

- *Type:* string

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `manualChain`<sup>Optional</sup> <a name="manualChain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain"></a>

```typescript
public readonly manualChain: string[];
```

- *Type:* string[]

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `ocspServers`<sup>Optional</sup> <a name="ocspServers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers"></a>

```typescript
public readonly ocspServers: string[];
```

- *Type:* string[]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `revocationSignatureAlgorithm`<sup>Optional</sup> <a name="revocationSignatureAlgorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm"></a>

```typescript
public readonly revocationSignatureAlgorithm: string;
```

- *Type:* string

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---



