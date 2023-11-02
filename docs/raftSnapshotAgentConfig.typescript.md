# `vault_raft_snapshot_agent_config`

Refer to the Terraform Registory for docs: [`vault_raft_snapshot_agent_config`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config).

# `raftSnapshotAgentConfig` Submodule <a name="`raftSnapshotAgentConfig` Submodule" id="@cdktf/provider-vault.raftSnapshotAgentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftSnapshotAgentConfig <a name="RaftSnapshotAgentConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config vault_raft_snapshot_agent_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

new raftSnapshotAgentConfig.RaftSnapshotAgentConfig(scope: Construct, id: string, config: RaftSnapshotAgentConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig">RaftSnapshotAgentConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig">RaftSnapshotAgentConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket">resetAwsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls">resetAwsS3DisableTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms">resetAwsS3EnableKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint">resetAwsS3Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle">resetAwsS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey">resetAwsS3KmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region">resetAwsS3Region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption">resetAwsS3ServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken">resetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey">resetAzureAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName">resetAzureAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment">resetAzureBlobEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName">resetAzureContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint">resetAzureEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix">resetFilePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls">resetGoogleDisableTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint">resetGoogleEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket">resetGoogleGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey">resetGoogleServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace">resetLocalMaxSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain">resetRetain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId"></a>

```typescript
public resetAwsAccessKeyId(): void
```

##### `resetAwsS3Bucket` <a name="resetAwsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket"></a>

```typescript
public resetAwsS3Bucket(): void
```

##### `resetAwsS3DisableTls` <a name="resetAwsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls"></a>

```typescript
public resetAwsS3DisableTls(): void
```

##### `resetAwsS3EnableKms` <a name="resetAwsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms"></a>

```typescript
public resetAwsS3EnableKms(): void
```

##### `resetAwsS3Endpoint` <a name="resetAwsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint"></a>

```typescript
public resetAwsS3Endpoint(): void
```

##### `resetAwsS3ForcePathStyle` <a name="resetAwsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle"></a>

```typescript
public resetAwsS3ForcePathStyle(): void
```

##### `resetAwsS3KmsKey` <a name="resetAwsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey"></a>

```typescript
public resetAwsS3KmsKey(): void
```

##### `resetAwsS3Region` <a name="resetAwsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region"></a>

```typescript
public resetAwsS3Region(): void
```

##### `resetAwsS3ServerSideEncryption` <a name="resetAwsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption"></a>

```typescript
public resetAwsS3ServerSideEncryption(): void
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey"></a>

```typescript
public resetAwsSecretAccessKey(): void
```

##### `resetAwsSessionToken` <a name="resetAwsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken"></a>

```typescript
public resetAwsSessionToken(): void
```

##### `resetAzureAccountKey` <a name="resetAzureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey"></a>

```typescript
public resetAzureAccountKey(): void
```

##### `resetAzureAccountName` <a name="resetAzureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName"></a>

```typescript
public resetAzureAccountName(): void
```

##### `resetAzureBlobEnvironment` <a name="resetAzureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment"></a>

```typescript
public resetAzureBlobEnvironment(): void
```

##### `resetAzureContainerName` <a name="resetAzureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName"></a>

```typescript
public resetAzureContainerName(): void
```

##### `resetAzureEndpoint` <a name="resetAzureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint"></a>

```typescript
public resetAzureEndpoint(): void
```

##### `resetFilePrefix` <a name="resetFilePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix"></a>

```typescript
public resetFilePrefix(): void
```

##### `resetGoogleDisableTls` <a name="resetGoogleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls"></a>

```typescript
public resetGoogleDisableTls(): void
```

##### `resetGoogleEndpoint` <a name="resetGoogleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint"></a>

```typescript
public resetGoogleEndpoint(): void
```

##### `resetGoogleGcsBucket` <a name="resetGoogleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket"></a>

```typescript
public resetGoogleGcsBucket(): void
```

##### `resetGoogleServiceAccountKey` <a name="resetGoogleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey"></a>

```typescript
public resetGoogleServiceAccountKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalMaxSpace` <a name="resetLocalMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace"></a>

```typescript
public resetLocalMaxSpace(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRetain` <a name="resetRetain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain"></a>

```typescript
public resetRetain(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RaftSnapshotAgentConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RaftSnapshotAgentConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RaftSnapshotAgentConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RaftSnapshotAgentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RaftSnapshotAgentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput">awsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput">awsS3DisableTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput">awsS3EnableKmsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput">awsS3EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput">awsS3ForcePathStyleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput">awsS3KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput">awsS3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput">awsS3ServerSideEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput">awsSessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput">azureAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput">azureAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput">azureBlobEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput">azureContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput">azureEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput">filePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput">googleDisableTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput">googleEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput">googleGcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput">googleServiceAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput">localMaxSpaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput">retainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket">awsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls">awsS3DisableTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms">awsS3EnableKms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint">awsS3Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle">awsS3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey">awsS3KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region">awsS3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption">awsS3ServerSideEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey">azureAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName">azureAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment">azureBlobEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName">azureContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint">azureEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix">filePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls">googleDisableTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint">googleEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket">googleGcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey">googleServiceAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace">localMaxSpace</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain">retain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput"></a>

```typescript
public readonly awsAccessKeyIdInput: string;
```

- *Type:* string

---

##### `awsS3BucketInput`<sup>Optional</sup> <a name="awsS3BucketInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput"></a>

```typescript
public readonly awsS3BucketInput: string;
```

- *Type:* string

---

##### `awsS3DisableTlsInput`<sup>Optional</sup> <a name="awsS3DisableTlsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput"></a>

```typescript
public readonly awsS3DisableTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3EnableKmsInput`<sup>Optional</sup> <a name="awsS3EnableKmsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput"></a>

```typescript
public readonly awsS3EnableKmsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3EndpointInput`<sup>Optional</sup> <a name="awsS3EndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput"></a>

```typescript
public readonly awsS3EndpointInput: string;
```

- *Type:* string

---

##### `awsS3ForcePathStyleInput`<sup>Optional</sup> <a name="awsS3ForcePathStyleInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput"></a>

```typescript
public readonly awsS3ForcePathStyleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3KmsKeyInput`<sup>Optional</sup> <a name="awsS3KmsKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput"></a>

```typescript
public readonly awsS3KmsKeyInput: string;
```

- *Type:* string

---

##### `awsS3RegionInput`<sup>Optional</sup> <a name="awsS3RegionInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput"></a>

```typescript
public readonly awsS3RegionInput: string;
```

- *Type:* string

---

##### `awsS3ServerSideEncryptionInput`<sup>Optional</sup> <a name="awsS3ServerSideEncryptionInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput"></a>

```typescript
public readonly awsS3ServerSideEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput"></a>

```typescript
public readonly awsSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `awsSessionTokenInput`<sup>Optional</sup> <a name="awsSessionTokenInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput"></a>

```typescript
public readonly awsSessionTokenInput: string;
```

- *Type:* string

---

##### `azureAccountKeyInput`<sup>Optional</sup> <a name="azureAccountKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput"></a>

```typescript
public readonly azureAccountKeyInput: string;
```

- *Type:* string

---

##### `azureAccountNameInput`<sup>Optional</sup> <a name="azureAccountNameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput"></a>

```typescript
public readonly azureAccountNameInput: string;
```

- *Type:* string

---

##### `azureBlobEnvironmentInput`<sup>Optional</sup> <a name="azureBlobEnvironmentInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput"></a>

```typescript
public readonly azureBlobEnvironmentInput: string;
```

- *Type:* string

---

##### `azureContainerNameInput`<sup>Optional</sup> <a name="azureContainerNameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput"></a>

```typescript
public readonly azureContainerNameInput: string;
```

- *Type:* string

---

##### `azureEndpointInput`<sup>Optional</sup> <a name="azureEndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput"></a>

```typescript
public readonly azureEndpointInput: string;
```

- *Type:* string

---

##### `filePrefixInput`<sup>Optional</sup> <a name="filePrefixInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput"></a>

```typescript
public readonly filePrefixInput: string;
```

- *Type:* string

---

##### `googleDisableTlsInput`<sup>Optional</sup> <a name="googleDisableTlsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput"></a>

```typescript
public readonly googleDisableTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `googleEndpointInput`<sup>Optional</sup> <a name="googleEndpointInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput"></a>

```typescript
public readonly googleEndpointInput: string;
```

- *Type:* string

---

##### `googleGcsBucketInput`<sup>Optional</sup> <a name="googleGcsBucketInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput"></a>

```typescript
public readonly googleGcsBucketInput: string;
```

- *Type:* string

---

##### `googleServiceAccountKeyInput`<sup>Optional</sup> <a name="googleServiceAccountKeyInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput"></a>

```typescript
public readonly googleServiceAccountKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `localMaxSpaceInput`<sup>Optional</sup> <a name="localMaxSpaceInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput"></a>

```typescript
public readonly localMaxSpaceInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `retainInput`<sup>Optional</sup> <a name="retainInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput"></a>

```typescript
public readonly retainInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

---

##### `awsS3Bucket`<sup>Required</sup> <a name="awsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket"></a>

```typescript
public readonly awsS3Bucket: string;
```

- *Type:* string

---

##### `awsS3DisableTls`<sup>Required</sup> <a name="awsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls"></a>

```typescript
public readonly awsS3DisableTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3EnableKms`<sup>Required</sup> <a name="awsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms"></a>

```typescript
public readonly awsS3EnableKms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3Endpoint`<sup>Required</sup> <a name="awsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint"></a>

```typescript
public readonly awsS3Endpoint: string;
```

- *Type:* string

---

##### `awsS3ForcePathStyle`<sup>Required</sup> <a name="awsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle"></a>

```typescript
public readonly awsS3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsS3KmsKey`<sup>Required</sup> <a name="awsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey"></a>

```typescript
public readonly awsS3KmsKey: string;
```

- *Type:* string

---

##### `awsS3Region`<sup>Required</sup> <a name="awsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region"></a>

```typescript
public readonly awsS3Region: string;
```

- *Type:* string

---

##### `awsS3ServerSideEncryption`<sup>Required</sup> <a name="awsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption"></a>

```typescript
public readonly awsS3ServerSideEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsSecretAccessKey`<sup>Required</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

---

##### `awsSessionToken`<sup>Required</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken"></a>

```typescript
public readonly awsSessionToken: string;
```

- *Type:* string

---

##### `azureAccountKey`<sup>Required</sup> <a name="azureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey"></a>

```typescript
public readonly azureAccountKey: string;
```

- *Type:* string

---

##### `azureAccountName`<sup>Required</sup> <a name="azureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName"></a>

```typescript
public readonly azureAccountName: string;
```

- *Type:* string

---

##### `azureBlobEnvironment`<sup>Required</sup> <a name="azureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment"></a>

```typescript
public readonly azureBlobEnvironment: string;
```

- *Type:* string

---

##### `azureContainerName`<sup>Required</sup> <a name="azureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName"></a>

```typescript
public readonly azureContainerName: string;
```

- *Type:* string

---

##### `azureEndpoint`<sup>Required</sup> <a name="azureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint"></a>

```typescript
public readonly azureEndpoint: string;
```

- *Type:* string

---

##### `filePrefix`<sup>Required</sup> <a name="filePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix"></a>

```typescript
public readonly filePrefix: string;
```

- *Type:* string

---

##### `googleDisableTls`<sup>Required</sup> <a name="googleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls"></a>

```typescript
public readonly googleDisableTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `googleEndpoint`<sup>Required</sup> <a name="googleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint"></a>

```typescript
public readonly googleEndpoint: string;
```

- *Type:* string

---

##### `googleGcsBucket`<sup>Required</sup> <a name="googleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket"></a>

```typescript
public readonly googleGcsBucket: string;
```

- *Type:* string

---

##### `googleServiceAccountKey`<sup>Required</sup> <a name="googleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey"></a>

```typescript
public readonly googleServiceAccountKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `localMaxSpace`<sup>Required</sup> <a name="localMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace"></a>

```typescript
public readonly localMaxSpace: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `retain`<sup>Required</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain"></a>

```typescript
public readonly retain: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RaftSnapshotAgentConfigConfig <a name="RaftSnapshotAgentConfigConfig" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.Initializer"></a>

```typescript
import { raftSnapshotAgentConfig } from '@cdktf/provider-vault'

const raftSnapshotAgentConfigConfig: raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name">name</a></code> | <code>string</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | The directory or bucket prefix to to use. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType">storageType</a></code> | <code>string</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>string</code> | AWS access key ID. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket">awsS3Bucket</a></code> | <code>string</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls">awsS3DisableTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms">awsS3EnableKms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint">awsS3Endpoint</a></code> | <code>string</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle">awsS3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey">awsS3KmsKey</a></code> | <code>string</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region">awsS3Region</a></code> | <code>string</code> | AWS region bucket is in. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption">awsS3ServerSideEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>string</code> | AWS secret access key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken">awsSessionToken</a></code> | <code>string</code> | AWS session token. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey">azureAccountKey</a></code> | <code>string</code> | Azure account key. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName">azureAccountName</a></code> | <code>string</code> | Azure account name. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment">azureBlobEnvironment</a></code> | <code>string</code> | Azure blob environment. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName">azureContainerName</a></code> | <code>string</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint">azureEndpoint</a></code> | <code>string</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix">filePrefix</a></code> | <code>string</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls">googleDisableTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint">googleEndpoint</a></code> | <code>string</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket">googleGcsBucket</a></code> | <code>string</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey">googleServiceAccountKey</a></code> | <code>string</code> | Google service account key in JSON format. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace">localMaxSpace</a></code> | <code>number</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain">retain</a></code> | <code>number</code> | How many snapshots are to be kept. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

The directory or bucket prefix to to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId"></a>

```typescript
public readonly awsAccessKeyId: string;
```

- *Type:* string

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `awsS3Bucket`<sup>Optional</sup> <a name="awsS3Bucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket"></a>

```typescript
public readonly awsS3Bucket: string;
```

- *Type:* string

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `awsS3DisableTls`<sup>Optional</sup> <a name="awsS3DisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls"></a>

```typescript
public readonly awsS3DisableTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `awsS3EnableKms`<sup>Optional</sup> <a name="awsS3EnableKms" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms"></a>

```typescript
public readonly awsS3EnableKms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `awsS3Endpoint`<sup>Optional</sup> <a name="awsS3Endpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint"></a>

```typescript
public readonly awsS3Endpoint: string;
```

- *Type:* string

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `awsS3ForcePathStyle`<sup>Optional</sup> <a name="awsS3ForcePathStyle" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle"></a>

```typescript
public readonly awsS3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `awsS3KmsKey`<sup>Optional</sup> <a name="awsS3KmsKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey"></a>

```typescript
public readonly awsS3KmsKey: string;
```

- *Type:* string

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `awsS3Region`<sup>Optional</sup> <a name="awsS3Region" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region"></a>

```typescript
public readonly awsS3Region: string;
```

- *Type:* string

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `awsS3ServerSideEncryption`<sup>Optional</sup> <a name="awsS3ServerSideEncryption" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption"></a>

```typescript
public readonly awsS3ServerSideEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey"></a>

```typescript
public readonly awsSecretAccessKey: string;
```

- *Type:* string

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `awsSessionToken`<sup>Optional</sup> <a name="awsSessionToken" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken"></a>

```typescript
public readonly awsSessionToken: string;
```

- *Type:* string

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `azureAccountKey`<sup>Optional</sup> <a name="azureAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey"></a>

```typescript
public readonly azureAccountKey: string;
```

- *Type:* string

Azure account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `azureAccountName`<sup>Optional</sup> <a name="azureAccountName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName"></a>

```typescript
public readonly azureAccountName: string;
```

- *Type:* string

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `azureBlobEnvironment`<sup>Optional</sup> <a name="azureBlobEnvironment" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment"></a>

```typescript
public readonly azureBlobEnvironment: string;
```

- *Type:* string

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `azureContainerName`<sup>Optional</sup> <a name="azureContainerName" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName"></a>

```typescript
public readonly azureContainerName: string;
```

- *Type:* string

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `azureEndpoint`<sup>Optional</sup> <a name="azureEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint"></a>

```typescript
public readonly azureEndpoint: string;
```

- *Type:* string

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `filePrefix`<sup>Optional</sup> <a name="filePrefix" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix"></a>

```typescript
public readonly filePrefix: string;
```

- *Type:* string

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `googleDisableTls`<sup>Optional</sup> <a name="googleDisableTls" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls"></a>

```typescript
public readonly googleDisableTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `googleEndpoint`<sup>Optional</sup> <a name="googleEndpoint" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint"></a>

```typescript
public readonly googleEndpoint: string;
```

- *Type:* string

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `googleGcsBucket`<sup>Optional</sup> <a name="googleGcsBucket" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket"></a>

```typescript
public readonly googleGcsBucket: string;
```

- *Type:* string

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `googleServiceAccountKey`<sup>Optional</sup> <a name="googleServiceAccountKey" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey"></a>

```typescript
public readonly googleServiceAccountKey: string;
```

- *Type:* string

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#id RaftSnapshotAgentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localMaxSpace`<sup>Optional</sup> <a name="localMaxSpace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace"></a>

```typescript
public readonly localMaxSpace: number;
```

- *Type:* number

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `retain`<sup>Optional</sup> <a name="retain" id="@cdktf/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain"></a>

```typescript
public readonly retain: number;
```

- *Type:* number

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---



