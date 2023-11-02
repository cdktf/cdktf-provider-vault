# `vault_pki_secret_backend_cert`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_cert`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert).

# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

new pkiSecretBackendCert.PkiSecretBackendCert(scope: Construct, id: string, config: PkiSecretBackendCertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig">PkiSecretBackendCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">resetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">resetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">resetRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">resetUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds">resetUserIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```typescript
public resetAltNames(): void
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```typescript
public resetExcludeCnFromSans(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```typescript
public resetIpSans(): void
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef"></a>

```typescript
public resetIssuerRef(): void
```

##### `resetMinSecondsRemaining` <a name="resetMinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```typescript
public resetMinSecondsRemaining(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```typescript
public resetOtherSans(): void
```

##### `resetPrivateKeyFormat` <a name="resetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```typescript
public resetPrivateKeyFormat(): void
```

##### `resetRevoke` <a name="resetRevoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```typescript
public resetRevoke(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```typescript
public resetUriSans(): void
```

##### `resetUserIds` <a name="resetUserIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds"></a>

```typescript
public resetUserIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

pkiSecretBackendCert.PkiSecretBackendCert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">caChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">expiration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">issuingCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">renewPending</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">altNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">ipSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput">issuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">minSecondsRemainingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">otherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">privateKeyFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">revokeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">uriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput">userIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">altNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">ipSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef">issuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">otherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">revoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">uriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds">userIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```typescript
public readonly caChain: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```typescript
public readonly expiration: number;
```

- *Type:* number

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```typescript
public readonly issuingCa: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

---

##### `renewPending`<sup>Required</sup> <a name="renewPending" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```typescript
public readonly renewPending: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```typescript
public readonly altNamesInput: string[];
```

- *Type:* string[]

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```typescript
public readonly excludeCnFromSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```typescript
public readonly ipSansInput: string[];
```

- *Type:* string[]

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput"></a>

```typescript
public readonly issuerRefInput: string;
```

- *Type:* string

---

##### `minSecondsRemainingInput`<sup>Optional</sup> <a name="minSecondsRemainingInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```typescript
public readonly minSecondsRemainingInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```typescript
public readonly otherSansInput: string[];
```

- *Type:* string[]

---

##### `privateKeyFormatInput`<sup>Optional</sup> <a name="privateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```typescript
public readonly privateKeyFormatInput: string;
```

- *Type:* string

---

##### `revokeInput`<sup>Optional</sup> <a name="revokeInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```typescript
public readonly revokeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```typescript
public readonly uriSansInput: string[];
```

- *Type:* string[]

---

##### `userIdsInput`<sup>Optional</sup> <a name="userIdsInput" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput"></a>

```typescript
public readonly userIdsInput: string[];
```

- *Type:* string[]

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

---

##### `minSecondsRemaining`<sup>Required</sup> <a name="minSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```typescript
public readonly minSecondsRemaining: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

---

##### `privateKeyFormat`<sup>Required</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```typescript
public readonly revoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```typescript
import { pkiSecretBackendCert } from '@cdktf/provider-vault'

const pkiSecretBackendCertConfig: pkiSecretBackendCert.PkiSecretBackendCertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">commonName</a></code> | <code>string</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">name</a></code> | <code>string</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">altNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">ipSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef">issuerRef</a></code> | <code>string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>number</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">otherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">revoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">ttl</a></code> | <code>string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">uriSans</a></code> | <code>string[]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds">userIds</a></code> | <code>string[]</code> | List of Subject User IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `minSecondsRemaining`<sup>Optional</sup> <a name="minSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```typescript
public readonly minSecondsRemaining: number;
```

- *Type:* number

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```typescript
public readonly revoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---



