# `terraformCloudSecretBackend` Submodule <a name="`terraformCloudSecretBackend` Submodule" id="@cdktf/provider-vault.terraformCloudSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretBackend <a name="TerraformCloudSecretBackend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend vault_terraform_cloud_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

new terraformCloudSecretBackend.TerraformCloudSecretBackend(scope: Construct, id: string, config?: TerraformCloudSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig">TerraformCloudSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig">TerraformCloudSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetTokenWo">resetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetTokenWoVersion">resetTokenWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAllowedManagedKeys"></a>

```typescript
public resetAllowedManagedKeys(): void
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBasePath"></a>

```typescript
public resetBasePath(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDelegatedAuthAccessors"></a>

```typescript
public resetDelegatedAuthAccessors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetExternalEntropyAccess"></a>

```typescript
public resetExternalEntropyAccess(): void
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetForceNoCache"></a>

```typescript
public resetForceNoCache(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetIdentityTokenKey"></a>

```typescript
public resetIdentityTokenKey(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetPluginVersion"></a>

```typescript
public resetPluginVersion(): void
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetSealWrap"></a>

```typescript
public resetSealWrap(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenWo` <a name="resetTokenWo" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetTokenWo"></a>

```typescript
public resetTokenWo(): void
```

##### `resetTokenWoVersion` <a name="resetTokenWoVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetTokenWoVersion"></a>

```typescript
public resetTokenWoVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TerraformCloudSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TerraformCloudSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TerraformCloudSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TerraformCloudSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TerraformCloudSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePathInput">basePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoInput">tokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoVersionInput">tokenWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePath">basePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWo">tokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoVersion">tokenWoVersion</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedManagedKeysInput"></a>

```typescript
public readonly allowedManagedKeysInput: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePathInput"></a>

```typescript
public readonly basePathInput: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.delegatedAuthAccessorsInput"></a>

```typescript
public readonly delegatedAuthAccessorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.externalEntropyAccessInput"></a>

```typescript
public readonly externalEntropyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forceNoCacheInput"></a>

```typescript
public readonly forceNoCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.identityTokenKeyInput"></a>

```typescript
public readonly identityTokenKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.pluginVersionInput"></a>

```typescript
public readonly pluginVersionInput: string;
```

- *Type:* string

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.sealWrapInput"></a>

```typescript
public readonly sealWrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `tokenWoInput`<sup>Optional</sup> <a name="tokenWoInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoInput"></a>

```typescript
public readonly tokenWoInput: string;
```

- *Type:* string

---

##### `tokenWoVersionInput`<sup>Optional</sup> <a name="tokenWoVersionInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoVersionInput"></a>

```typescript
public readonly tokenWoVersionInput: number;
```

- *Type:* number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenWo`<sup>Required</sup> <a name="tokenWo" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

---

##### `tokenWoVersion`<sup>Required</sup> <a name="tokenWoVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenWoVersion"></a>

```typescript
public readonly tokenWoVersion: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretBackendConfig <a name="TerraformCloudSecretBackendConfig" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.Initializer"></a>

```typescript
import { terraformCloudSecretBackend } from '@cdktf/provider-vault'

const terraformCloudSecretBackendConfig: terraformCloudSecretBackend.TerraformCloudSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.address">address</a></code> | <code>string</code> | Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the Vault Terraform Cloud mount to configure. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.basePath">basePath</a></code> | <code>string</code> | Specifies the base path for the Terraform Cloud or Enterprise API. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.token">token</a></code> | <code>string</code> | Specifies the Terraform Cloud access token to use. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.tokenWo">tokenWo</a></code> | <code>string</code> | Write-only Terraform Cloud access token to use. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.tokenWoVersion">tokenWoVersion</a></code> | <code>number</code> | Version counter for write-only secret data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#address TerraformCloudSecretBackend#address}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#allowed_managed_keys TerraformCloudSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#allowed_response_headers TerraformCloudSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#audit_non_hmac_request_keys TerraformCloudSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#audit_non_hmac_response_keys TerraformCloudSecretBackend#audit_non_hmac_response_keys}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the Vault Terraform Cloud mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#backend TerraformCloudSecretBackend#backend}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

Specifies the base path for the Terraform Cloud or Enterprise API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#base_path TerraformCloudSecretBackend#base_path}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#default_lease_ttl_seconds TerraformCloudSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#delegated_auth_accessors TerraformCloudSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#description TerraformCloudSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#disable_remount TerraformCloudSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#external_entropy_access TerraformCloudSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#force_no_cache TerraformCloudSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#identity_token_key TerraformCloudSecretBackend#identity_token_key}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#listing_visibility TerraformCloudSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#local TerraformCloudSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#max_lease_ttl_seconds TerraformCloudSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#namespace TerraformCloudSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#options TerraformCloudSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#passthrough_request_headers TerraformCloudSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#plugin_version TerraformCloudSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#seal_wrap TerraformCloudSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Specifies the Terraform Cloud access token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#token TerraformCloudSecretBackend#token}

---

##### `tokenWo`<sup>Optional</sup> <a name="tokenWo" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.tokenWo"></a>

```typescript
public readonly tokenWo: string;
```

- *Type:* string

Write-only Terraform Cloud access token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#token_wo TerraformCloudSecretBackend#token_wo}

---

##### `tokenWoVersion`<sup>Optional</sup> <a name="tokenWoVersion" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.tokenWoVersion"></a>

```typescript
public readonly tokenWoVersion: number;
```

- *Type:* number

Version counter for write-only secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/terraform_cloud_secret_backend#token_wo_version TerraformCloudSecretBackend#token_wo_version}

---



