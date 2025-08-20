# `awsSecretBackend` Submodule <a name="`awsSecretBackend` Submodule" id="@cdktf/provider-vault.awsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackend <a name="AwsSecretBackend" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend vault_aws_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

new awsSecretBackend.AwsSecretBackend(scope: Construct, id: string, config?: AwsSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig">AwsSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig">AwsSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint">resetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenAudience">resetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint">resetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsFallbackEndpoints">resetStsFallbackEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsFallbackRegions">resetStsFallbackRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsRegion">resetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAllowedManagedKeys"></a>

```typescript
public resetAllowedManagedKeys(): void
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDelegatedAuthAccessors"></a>

```typescript
public resetDelegatedAuthAccessors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableAutomatedRotation"></a>

```typescript
public resetDisableAutomatedRotation(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetExternalEntropyAccess"></a>

```typescript
public resetExternalEntropyAccess(): void
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetForceNoCache"></a>

```typescript
public resetForceNoCache(): void
```

##### `resetIamEndpoint` <a name="resetIamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint"></a>

```typescript
public resetIamEndpoint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityTokenAudience` <a name="resetIdentityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenAudience"></a>

```typescript
public resetIdentityTokenAudience(): void
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenKey"></a>

```typescript
public resetIdentityTokenKey(): void
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIdentityTokenTtl"></a>

```typescript
public resetIdentityTokenTtl(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPluginVersion"></a>

```typescript
public resetPluginVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationSchedule"></a>

```typescript
public resetRotationSchedule(): void
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRotationWindow"></a>

```typescript
public resetRotationWindow(): void
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSealWrap"></a>

```typescript
public resetSealWrap(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetStsEndpoint` <a name="resetStsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint"></a>

```typescript
public resetStsEndpoint(): void
```

##### `resetStsFallbackEndpoints` <a name="resetStsFallbackEndpoints" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsFallbackEndpoints"></a>

```typescript
public resetStsFallbackEndpoints(): void
```

##### `resetStsFallbackRegions` <a name="resetStsFallbackRegions" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsFallbackRegions"></a>

```typescript
public resetStsFallbackRegions(): void
```

##### `resetStsRegion` <a name="resetStsRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsRegion"></a>

```typescript
public resetStsRegion(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

awsSecretBackend.AwsSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

awsSecretBackend.AwsSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

awsSecretBackend.AwsSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

awsSecretBackend.AwsSecretBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput">iamEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudienceInput">identityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationWindowInput">rotationWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput">stsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackEndpointsInput">stsFallbackEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackRegionsInput">stsFallbackRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsRegionInput">stsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint">iamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudience">identityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtl">identityTokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint">stsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackEndpoints">stsFallbackEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackRegions">stsFallbackRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsRegion">stsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedManagedKeysInput"></a>

```typescript
public readonly allowedManagedKeysInput: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.delegatedAuthAccessorsInput"></a>

```typescript
public readonly delegatedAuthAccessorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableAutomatedRotationInput"></a>

```typescript
public readonly disableAutomatedRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.externalEntropyAccessInput"></a>

```typescript
public readonly externalEntropyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forceNoCacheInput"></a>

```typescript
public readonly forceNoCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamEndpointInput`<sup>Optional</sup> <a name="iamEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput"></a>

```typescript
public readonly iamEndpointInput: string;
```

- *Type:* string

---

##### `identityTokenAudienceInput`<sup>Optional</sup> <a name="identityTokenAudienceInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudienceInput"></a>

```typescript
public readonly identityTokenAudienceInput: string;
```

- *Type:* string

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKeyInput"></a>

```typescript
public readonly identityTokenKeyInput: string;
```

- *Type:* string

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtlInput"></a>

```typescript
public readonly identityTokenTtlInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pluginVersionInput"></a>

```typescript
public readonly pluginVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: number;
```

- *Type:* number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationScheduleInput"></a>

```typescript
public readonly rotationScheduleInput: string;
```

- *Type:* string

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationWindowInput"></a>

```typescript
public readonly rotationWindowInput: number;
```

- *Type:* number

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.sealWrapInput"></a>

```typescript
public readonly sealWrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `stsEndpointInput`<sup>Optional</sup> <a name="stsEndpointInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput"></a>

```typescript
public readonly stsEndpointInput: string;
```

- *Type:* string

---

##### `stsFallbackEndpointsInput`<sup>Optional</sup> <a name="stsFallbackEndpointsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackEndpointsInput"></a>

```typescript
public readonly stsFallbackEndpointsInput: string[];
```

- *Type:* string[]

---

##### `stsFallbackRegionsInput`<sup>Optional</sup> <a name="stsFallbackRegionsInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackRegionsInput"></a>

```typescript
public readonly stsFallbackRegionsInput: string[];
```

- *Type:* string[]

---

##### `stsRegionInput`<sup>Optional</sup> <a name="stsRegionInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsRegionInput"></a>

```typescript
public readonly stsRegionInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamEndpoint`<sup>Required</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint"></a>

```typescript
public readonly iamEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityTokenAudience`<sup>Required</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenAudience"></a>

```typescript
public readonly identityTokenAudience: string;
```

- *Type:* string

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.identityTokenTtl"></a>

```typescript
public readonly identityTokenTtl: number;
```

- *Type:* number

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `stsEndpoint`<sup>Required</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint"></a>

```typescript
public readonly stsEndpoint: string;
```

- *Type:* string

---

##### `stsFallbackEndpoints`<sup>Required</sup> <a name="stsFallbackEndpoints" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackEndpoints"></a>

```typescript
public readonly stsFallbackEndpoints: string[];
```

- *Type:* string[]

---

##### `stsFallbackRegions`<sup>Required</sup> <a name="stsFallbackRegions" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsFallbackRegions"></a>

```typescript
public readonly stsFallbackRegions: string[];
```

- *Type:* string[]

---

##### `stsRegion`<sup>Required</sup> <a name="stsRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsRegion"></a>

```typescript
public readonly stsRegion: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendConfig <a name="AwsSecretBackendConfig" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.Initializer"></a>

```typescript
import { awsSecretBackend } from '@cdktf/provider-vault'

const awsSecretBackendConfig: awsSecretBackend.AwsSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey">accessKey</a></code> | <code>string</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint">iamEndpoint</a></code> | <code>string</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenAudience">identityTokenAudience</a></code> | <code>string</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>number</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the secret backend is local only. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path">path</a></code> | <code>string</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region">region</a></code> | <code>string</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey">secretKey</a></code> | <code>string</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint">stsEndpoint</a></code> | <code>string</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsFallbackEndpoints">stsFallbackEndpoints</a></code> | <code>string[]</code> | Specifies a list of custom STS fallback endpoints to use (in order). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsFallbackRegions">stsFallbackRegions</a></code> | <code>string[]</code> | Specifies a list of custom STS fallback regions to use (in order). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsRegion">stsRegion</a></code> | <code>string</code> | Specifies a custom STS region to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#allowed_managed_keys AwsSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#allowed_response_headers AwsSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#audit_non_hmac_request_keys AwsSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#audit_non_hmac_response_keys AwsSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#delegated_auth_accessors AwsSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#description AwsSecretBackend#description}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#disable_automated_rotation AwsSecretBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#external_entropy_access AwsSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#force_no_cache AwsSecretBackend#force_no_cache}

---

##### `iamEndpoint`<sup>Optional</sup> <a name="iamEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint"></a>

```typescript
public readonly iamEndpoint: string;
```

- *Type:* string

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudience`<sup>Optional</sup> <a name="identityTokenAudience" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenAudience"></a>

```typescript
public readonly identityTokenAudience: string;
```

- *Type:* string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#identity_token_audience AwsSecretBackend#identity_token_audience}

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

The key to use for signing identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#identity_token_key AwsSecretBackend#identity_token_key}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.identityTokenTtl"></a>

```typescript
public readonly identityTokenTtl: number;
```

- *Type:* number

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#identity_token_ttl AwsSecretBackend#identity_token_ttl}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#listing_visibility AwsSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the secret backend is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#local AwsSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#options AwsSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#passthrough_request_headers AwsSecretBackend#passthrough_request_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to mount the backend at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#path AwsSecretBackend#path}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#plugin_version AwsSecretBackend#plugin_version}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#region AwsSecretBackend#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#role_arn AwsSecretBackend#role_arn}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#rotation_period AwsSecretBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#rotation_schedule AwsSecretBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#rotation_window AwsSecretBackend#rotation_window}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#seal_wrap AwsSecretBackend#seal_wrap}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `stsEndpoint`<sup>Optional</sup> <a name="stsEndpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint"></a>

```typescript
public readonly stsEndpoint: string;
```

- *Type:* string

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `stsFallbackEndpoints`<sup>Optional</sup> <a name="stsFallbackEndpoints" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsFallbackEndpoints"></a>

```typescript
public readonly stsFallbackEndpoints: string[];
```

- *Type:* string[]

Specifies a list of custom STS fallback endpoints to use (in order).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#sts_fallback_endpoints AwsSecretBackend#sts_fallback_endpoints}

---

##### `stsFallbackRegions`<sup>Optional</sup> <a name="stsFallbackRegions" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsFallbackRegions"></a>

```typescript
public readonly stsFallbackRegions: string[];
```

- *Type:* string[]

Specifies a list of custom STS fallback regions to use (in order).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#sts_fallback_regions AwsSecretBackend#sts_fallback_regions}

---

##### `stsRegion`<sup>Optional</sup> <a name="stsRegion" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsRegion"></a>

```typescript
public readonly stsRegion: string;
```

- *Type:* string

Specifies a custom STS region to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#sts_region AwsSecretBackend#sts_region}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/aws_secret_backend#username_template AwsSecretBackend#username_template}

---



