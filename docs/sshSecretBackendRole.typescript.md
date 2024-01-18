# `sshSecretBackendRole` Submodule <a name="`sshSecretBackendRole` Submodule" id="@cdktf/provider-vault.sshSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendRole <a name="SshSecretBackendRole" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

new sshSecretBackendRole.SshSecretBackendRole(scope: Construct, id: string, config: SshSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig">SshSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig">putAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner">resetAlgorithmSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains">resetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions">resetAllowedCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate">resetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions">resetAllowedExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig">resetAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths">resetAllowedUserKeyLengths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers">resetAllowedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate">resetAllowedUsersTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates">resetAllowHostCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains">resetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates">resetAllowUserCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds">resetAllowUserKeyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions">resetDefaultCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions">resetDefaultExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser">resetDefaultUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate">resetDefaultUserTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat">resetKeyIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNotBeforeDuration">resetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedUserKeyConfig` <a name="putAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig"></a>

```typescript
public putAllowedUserKeyConfig(value: IResolvable | SshSecretBackendRoleAllowedUserKeyConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]

---

##### `resetAlgorithmSigner` <a name="resetAlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner"></a>

```typescript
public resetAlgorithmSigner(): void
```

##### `resetAllowBareDomains` <a name="resetAllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains"></a>

```typescript
public resetAllowBareDomains(): void
```

##### `resetAllowedCriticalOptions` <a name="resetAllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions"></a>

```typescript
public resetAllowedCriticalOptions(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetAllowedDomainsTemplate` <a name="resetAllowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomainsTemplate"></a>

```typescript
public resetAllowedDomainsTemplate(): void
```

##### `resetAllowedExtensions` <a name="resetAllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions"></a>

```typescript
public resetAllowedExtensions(): void
```

##### `resetAllowedUserKeyConfig` <a name="resetAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig"></a>

```typescript
public resetAllowedUserKeyConfig(): void
```

##### `resetAllowedUserKeyLengths` <a name="resetAllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths"></a>

```typescript
public resetAllowedUserKeyLengths(): void
```

##### `resetAllowedUsers` <a name="resetAllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers"></a>

```typescript
public resetAllowedUsers(): void
```

##### `resetAllowedUsersTemplate` <a name="resetAllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate"></a>

```typescript
public resetAllowedUsersTemplate(): void
```

##### `resetAllowHostCertificates` <a name="resetAllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates"></a>

```typescript
public resetAllowHostCertificates(): void
```

##### `resetAllowSubdomains` <a name="resetAllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains"></a>

```typescript
public resetAllowSubdomains(): void
```

##### `resetAllowUserCertificates` <a name="resetAllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates"></a>

```typescript
public resetAllowUserCertificates(): void
```

##### `resetAllowUserKeyIds` <a name="resetAllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds"></a>

```typescript
public resetAllowUserKeyIds(): void
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList"></a>

```typescript
public resetCidrList(): void
```

##### `resetDefaultCriticalOptions` <a name="resetDefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions"></a>

```typescript
public resetDefaultCriticalOptions(): void
```

##### `resetDefaultExtensions` <a name="resetDefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions"></a>

```typescript
public resetDefaultExtensions(): void
```

##### `resetDefaultUser` <a name="resetDefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser"></a>

```typescript
public resetDefaultUser(): void
```

##### `resetDefaultUserTemplate` <a name="resetDefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate"></a>

```typescript
public resetDefaultUserTemplate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyIdFormat` <a name="resetKeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat"></a>

```typescript
public resetKeyIdFormat(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNotBeforeDuration` <a name="resetNotBeforeDuration" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNotBeforeDuration"></a>

```typescript
public resetNotBeforeDuration(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SshSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

sshSecretBackendRole.SshSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

sshSecretBackendRole.SshSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

sshSecretBackendRole.SshSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SshSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SshSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SshSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SshSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput">algorithmSignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput">allowBareDomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput">allowedCriticalOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput">allowedDomainsTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput">allowedExtensionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput">allowedUserKeyConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput">allowedUserKeyLengthsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput">allowedUsersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput">allowedUsersTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput">allowHostCertificatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput">allowSubdomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput">allowUserCertificatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput">allowUserKeyIdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput">cidrListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput">defaultCriticalOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput">defaultExtensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput">defaultUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput">defaultUserTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput">keyIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDurationInput">notBeforeDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner">algorithmSigner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains">allowBareDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions">allowedExtensions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths">allowedUserKeyLengths</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers">allowedUsers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates">allowHostCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains">allowSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates">allowUserCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList">cidrList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions">defaultExtensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser">defaultUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat">keyIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedUserKeyConfig`<sup>Required</sup> <a name="allowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig"></a>

```typescript
public readonly allowedUserKeyConfig: SshSecretBackendRoleAllowedUserKeyConfigList;
```

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a>

---

##### `algorithmSignerInput`<sup>Optional</sup> <a name="algorithmSignerInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput"></a>

```typescript
public readonly algorithmSignerInput: string;
```

- *Type:* string

---

##### `allowBareDomainsInput`<sup>Optional</sup> <a name="allowBareDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput"></a>

```typescript
public readonly allowBareDomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedCriticalOptionsInput`<sup>Optional</sup> <a name="allowedCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput"></a>

```typescript
public readonly allowedCriticalOptionsInput: string;
```

- *Type:* string

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string;
```

- *Type:* string

---

##### `allowedDomainsTemplateInput`<sup>Optional</sup> <a name="allowedDomainsTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```typescript
public readonly allowedDomainsTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedExtensionsInput`<sup>Optional</sup> <a name="allowedExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput"></a>

```typescript
public readonly allowedExtensionsInput: string;
```

- *Type:* string

---

##### `allowedUserKeyConfigInput`<sup>Optional</sup> <a name="allowedUserKeyConfigInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput"></a>

```typescript
public readonly allowedUserKeyConfigInput: IResolvable | SshSecretBackendRoleAllowedUserKeyConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]

---

##### `allowedUserKeyLengthsInput`<sup>Optional</sup> <a name="allowedUserKeyLengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput"></a>

```typescript
public readonly allowedUserKeyLengthsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `allowedUsersInput`<sup>Optional</sup> <a name="allowedUsersInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput"></a>

```typescript
public readonly allowedUsersInput: string;
```

- *Type:* string

---

##### `allowedUsersTemplateInput`<sup>Optional</sup> <a name="allowedUsersTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput"></a>

```typescript
public readonly allowedUsersTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHostCertificatesInput`<sup>Optional</sup> <a name="allowHostCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput"></a>

```typescript
public readonly allowHostCertificatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubdomainsInput`<sup>Optional</sup> <a name="allowSubdomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput"></a>

```typescript
public readonly allowSubdomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUserCertificatesInput`<sup>Optional</sup> <a name="allowUserCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput"></a>

```typescript
public readonly allowUserCertificatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUserKeyIdsInput`<sup>Optional</sup> <a name="allowUserKeyIdsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput"></a>

```typescript
public readonly allowUserKeyIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput"></a>

```typescript
public readonly cidrListInput: string;
```

- *Type:* string

---

##### `defaultCriticalOptionsInput`<sup>Optional</sup> <a name="defaultCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput"></a>

```typescript
public readonly defaultCriticalOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExtensionsInput`<sup>Optional</sup> <a name="defaultExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput"></a>

```typescript
public readonly defaultExtensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultUserInput`<sup>Optional</sup> <a name="defaultUserInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput"></a>

```typescript
public readonly defaultUserInput: string;
```

- *Type:* string

---

##### `defaultUserTemplateInput`<sup>Optional</sup> <a name="defaultUserTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput"></a>

```typescript
public readonly defaultUserTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdFormatInput`<sup>Optional</sup> <a name="keyIdFormatInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput"></a>

```typescript
public readonly keyIdFormatInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notBeforeDurationInput`<sup>Optional</sup> <a name="notBeforeDurationInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDurationInput"></a>

```typescript
public readonly notBeforeDurationInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `algorithmSigner`<sup>Required</sup> <a name="algorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner"></a>

```typescript
public readonly algorithmSigner: string;
```

- *Type:* string

---

##### `allowBareDomains`<sup>Required</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains"></a>

```typescript
public readonly allowBareDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedCriticalOptions`<sup>Required</sup> <a name="allowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions"></a>

```typescript
public readonly allowedCriticalOptions: string;
```

- *Type:* string

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string;
```

- *Type:* string

---

##### `allowedDomainsTemplate`<sup>Required</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsTemplate"></a>

```typescript
public readonly allowedDomainsTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedExtensions`<sup>Required</sup> <a name="allowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions"></a>

```typescript
public readonly allowedExtensions: string;
```

- *Type:* string

---

##### `allowedUserKeyLengths`<sup>Required</sup> <a name="allowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths"></a>

```typescript
public readonly allowedUserKeyLengths: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `allowedUsers`<sup>Required</sup> <a name="allowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers"></a>

```typescript
public readonly allowedUsers: string;
```

- *Type:* string

---

##### `allowedUsersTemplate`<sup>Required</sup> <a name="allowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate"></a>

```typescript
public readonly allowedUsersTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHostCertificates`<sup>Required</sup> <a name="allowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates"></a>

```typescript
public readonly allowHostCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubdomains`<sup>Required</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains"></a>

```typescript
public readonly allowSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUserCertificates`<sup>Required</sup> <a name="allowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates"></a>

```typescript
public readonly allowUserCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUserKeyIds`<sup>Required</sup> <a name="allowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds"></a>

```typescript
public readonly allowUserKeyIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList"></a>

```typescript
public readonly cidrList: string;
```

- *Type:* string

---

##### `defaultCriticalOptions`<sup>Required</sup> <a name="defaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions"></a>

```typescript
public readonly defaultCriticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExtensions`<sup>Required</sup> <a name="defaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions"></a>

```typescript
public readonly defaultExtensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultUser`<sup>Required</sup> <a name="defaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser"></a>

```typescript
public readonly defaultUser: string;
```

- *Type:* string

---

##### `defaultUserTemplate`<sup>Required</sup> <a name="defaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate"></a>

```typescript
public readonly defaultUserTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyIdFormat`<sup>Required</sup> <a name="keyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat"></a>

```typescript
public readonly keyIdFormat: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notBeforeDuration`<sup>Required</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendRoleAllowedUserKeyConfig <a name="SshSecretBackendRoleAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.Initializer"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

const sshSecretBackendRoleAllowedUserKeyConfig: sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths">lengths</a></code> | <code>number[]</code> | List of allowed key lengths, vault-1.10 and above. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type">type</a></code> | <code>string</code> | Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521. |

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths"></a>

```typescript
public readonly lengths: number[];
```

- *Type:* number[]

List of allowed key lengths, vault-1.10 and above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#type SshSecretBackendRole#type}

---

### SshSecretBackendRoleConfig <a name="SshSecretBackendRoleConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.Initializer"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

const sshSecretBackendRoleConfig: sshSecretBackendRole.SshSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner">algorithmSigner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains">allowBareDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions">allowedExtensions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]</code> | allowed_user_key_config block. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths">allowedUserKeyLengths</a></code> | <code>{[ key: string ]: number}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers">allowedUsers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates">allowHostCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains">allowSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates">allowUserCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList">cidrList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions">defaultExtensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser">defaultUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat">keyIdFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `algorithmSigner`<sup>Optional</sup> <a name="algorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner"></a>

```typescript
public readonly algorithmSigner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains"></a>

```typescript
public readonly allowBareDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `allowedCriticalOptions`<sup>Optional</sup> <a name="allowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions"></a>

```typescript
public readonly allowedCriticalOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```typescript
public readonly allowedDomainsTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}.

---

##### `allowedExtensions`<sup>Optional</sup> <a name="allowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions"></a>

```typescript
public readonly allowedExtensions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `allowedUserKeyConfig`<sup>Optional</sup> <a name="allowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig"></a>

```typescript
public readonly allowedUserKeyConfig: IResolvable | SshSecretBackendRoleAllowedUserKeyConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `allowedUserKeyLengths`<sup>Optional</sup> <a name="allowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths"></a>

```typescript
public readonly allowedUserKeyLengths: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}.

---

##### `allowedUsers`<sup>Optional</sup> <a name="allowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers"></a>

```typescript
public readonly allowedUsers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `allowedUsersTemplate`<sup>Optional</sup> <a name="allowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate"></a>

```typescript
public readonly allowedUsersTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `allowHostCertificates`<sup>Optional</sup> <a name="allowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates"></a>

```typescript
public readonly allowHostCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains"></a>

```typescript
public readonly allowSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `allowUserCertificates`<sup>Optional</sup> <a name="allowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates"></a>

```typescript
public readonly allowUserCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `allowUserKeyIds`<sup>Optional</sup> <a name="allowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds"></a>

```typescript
public readonly allowUserKeyIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList"></a>

```typescript
public readonly cidrList: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `defaultCriticalOptions`<sup>Optional</sup> <a name="defaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions"></a>

```typescript
public readonly defaultCriticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `defaultExtensions`<sup>Optional</sup> <a name="defaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions"></a>

```typescript
public readonly defaultExtensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}.

---

##### `defaultUser`<sup>Optional</sup> <a name="defaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser"></a>

```typescript
public readonly defaultUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `defaultUserTemplate`<sup>Optional</sup> <a name="defaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate"></a>

```typescript
public readonly defaultUserTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyIdFormat`<sup>Optional</sup> <a name="keyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat"></a>

```typescript
public readonly keyIdFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

Specifies the duration by which to backdate the ValidAfter property. Uses duration format strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#not_before_duration SshSecretBackendRole#not_before_duration}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### SshSecretBackendRoleAllowedUserKeyConfigList <a name="SshSecretBackendRoleAllowedUserKeyConfigList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

new sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get"></a>

```typescript
public get(index: number): SshSecretBackendRoleAllowedUserKeyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SshSecretBackendRoleAllowedUserKeyConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>[]

---


### SshSecretBackendRoleAllowedUserKeyConfigOutputReference <a name="SshSecretBackendRoleAllowedUserKeyConfigOutputReference" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer"></a>

```typescript
import { sshSecretBackendRole } from '@cdktf/provider-vault'

new sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput">lengthsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths">lengths</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lengthsInput`<sup>Optional</sup> <a name="lengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput"></a>

```typescript
public readonly lengthsInput: number[];
```

- *Type:* number[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths"></a>

```typescript
public readonly lengths: number[];
```

- *Type:* number[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SshSecretBackendRoleAllowedUserKeyConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>

---



