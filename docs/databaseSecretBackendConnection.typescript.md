# `databaseSecretBackendConnection` Submodule <a name="`databaseSecretBackendConnection` Submodule" id="@cdktf/provider-vault.databaseSecretBackendConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendConnection <a name="DatabaseSecretBackendConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection vault_database_secret_backend_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnection(scope: Construct, id: string, config: DatabaseSecretBackendConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig">DatabaseSecretBackendConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig">DatabaseSecretBackendConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra">putCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase">putCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch">putElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana">putHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb">putInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb">putMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas">putMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql">putMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora">putMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy">putMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds">putMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle">putOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis">putRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache">putRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake">putSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra">resetCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase">resetCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch">resetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana">resetHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb">resetInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb">resetMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas">resetMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql">resetMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora">resetMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy">resetMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds">resetMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle">resetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis">resetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache">resetRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements">resetRootRotationStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake">resetSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCassandra` <a name="putCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra"></a>

```typescript
public putCassandra(value: DatabaseSecretBackendConnectionCassandra): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCassandra.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `putCouchbase` <a name="putCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase"></a>

```typescript
public putCouchbase(value: DatabaseSecretBackendConnectionCouchbase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putCouchbase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `putElasticsearch` <a name="putElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch"></a>

```typescript
public putElasticsearch(value: DatabaseSecretBackendConnectionElasticsearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `putHana` <a name="putHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana"></a>

```typescript
public putHana(value: DatabaseSecretBackendConnectionHana): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putHana.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `putInfluxdb` <a name="putInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb"></a>

```typescript
public putInfluxdb(value: DatabaseSecretBackendConnectionInfluxdb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putInfluxdb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `putMongodb` <a name="putMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb"></a>

```typescript
public putMongodb(value: DatabaseSecretBackendConnectionMongodb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `putMongodbatlas` <a name="putMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas"></a>

```typescript
public putMongodbatlas(value: DatabaseSecretBackendConnectionMongodbatlas): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMongodbatlas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `putMssql` <a name="putMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql"></a>

```typescript
public putMssql(value: DatabaseSecretBackendConnectionMssql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMssql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql"></a>

```typescript
public putMysql(value: DatabaseSecretBackendConnectionMysql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `putMysqlAurora` <a name="putMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora"></a>

```typescript
public putMysqlAurora(value: DatabaseSecretBackendConnectionMysqlAurora): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `putMysqlLegacy` <a name="putMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy"></a>

```typescript
public putMysqlLegacy(value: DatabaseSecretBackendConnectionMysqlLegacy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlLegacy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `putMysqlRds` <a name="putMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds"></a>

```typescript
public putMysqlRds(value: DatabaseSecretBackendConnectionMysqlRds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putMysqlRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle"></a>

```typescript
public putOracle(value: DatabaseSecretBackendConnectionOracle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql"></a>

```typescript
public putPostgresql(value: DatabaseSecretBackendConnectionPostgresql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `putRedis` <a name="putRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis"></a>

```typescript
public putRedis(value: DatabaseSecretBackendConnectionRedis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `putRedisElasticache` <a name="putRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache"></a>

```typescript
public putRedisElasticache(value: DatabaseSecretBackendConnectionRedisElasticache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedisElasticache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `putRedshift` <a name="putRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift"></a>

```typescript
public putRedshift(value: DatabaseSecretBackendConnectionRedshift): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `putSnowflake` <a name="putSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake"></a>

```typescript
public putSnowflake(value: DatabaseSecretBackendConnectionSnowflake): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetCassandra` <a name="resetCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCassandra"></a>

```typescript
public resetCassandra(): void
```

##### `resetCouchbase` <a name="resetCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetCouchbase"></a>

```typescript
public resetCouchbase(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetData"></a>

```typescript
public resetData(): void
```

##### `resetElasticsearch` <a name="resetElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetElasticsearch"></a>

```typescript
public resetElasticsearch(): void
```

##### `resetHana` <a name="resetHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetHana"></a>

```typescript
public resetHana(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfluxdb` <a name="resetInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetInfluxdb"></a>

```typescript
public resetInfluxdb(): void
```

##### `resetMongodb` <a name="resetMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodb"></a>

```typescript
public resetMongodb(): void
```

##### `resetMongodbatlas` <a name="resetMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMongodbatlas"></a>

```typescript
public resetMongodbatlas(): void
```

##### `resetMssql` <a name="resetMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMssql"></a>

```typescript
public resetMssql(): void
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysql"></a>

```typescript
public resetMysql(): void
```

##### `resetMysqlAurora` <a name="resetMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlAurora"></a>

```typescript
public resetMysqlAurora(): void
```

##### `resetMysqlLegacy` <a name="resetMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlLegacy"></a>

```typescript
public resetMysqlLegacy(): void
```

##### `resetMysqlRds` <a name="resetMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetMysqlRds"></a>

```typescript
public resetMysqlRds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetOracle"></a>

```typescript
public resetOracle(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetPostgresql"></a>

```typescript
public resetPostgresql(): void
```

##### `resetRedis` <a name="resetRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedis"></a>

```typescript
public resetRedis(): void
```

##### `resetRedisElasticache` <a name="resetRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedisElasticache"></a>

```typescript
public resetRedisElasticache(): void
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRedshift"></a>

```typescript
public resetRedshift(): void
```

##### `resetRootRotationStatements` <a name="resetRootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetRootRotationStatements"></a>

```typescript
public resetRootRotationStatements(): void
```

##### `resetSnowflake` <a name="resetSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetSnowflake"></a>

```typescript
public resetSnowflake(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseSecretBackendConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSecretBackendConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSecretBackendConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora">mysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy">mysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds">mysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache">redisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput">cassandraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput">couchbaseInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput">elasticsearchInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput">hanaInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput">influxdbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput">mongodbatlasInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput">mongodbInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput">mssqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput">mysqlAuroraInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput">mysqlLegacyInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput">mysqlRdsInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput">oracleInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput">redisElasticacheInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput">redisInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput">redshiftInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput">rootRotationStatementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput">snowflakeInput</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cassandra`<sup>Required</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandra"></a>

```typescript
public readonly cassandra: DatabaseSecretBackendConnectionCassandraOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference">DatabaseSecretBackendConnectionCassandraOutputReference</a>

---

##### `couchbase`<sup>Required</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbase"></a>

```typescript
public readonly couchbase: DatabaseSecretBackendConnectionCouchbaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference">DatabaseSecretBackendConnectionCouchbaseOutputReference</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: DatabaseSecretBackendConnectionElasticsearchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference">DatabaseSecretBackendConnectionElasticsearchOutputReference</a>

---

##### `hana`<sup>Required</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hana"></a>

```typescript
public readonly hana: DatabaseSecretBackendConnectionHanaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference">DatabaseSecretBackendConnectionHanaOutputReference</a>

---

##### `influxdb`<sup>Required</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdb"></a>

```typescript
public readonly influxdb: DatabaseSecretBackendConnectionInfluxdbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference">DatabaseSecretBackendConnectionInfluxdbOutputReference</a>

---

##### `mongodb`<sup>Required</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodb"></a>

```typescript
public readonly mongodb: DatabaseSecretBackendConnectionMongodbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference">DatabaseSecretBackendConnectionMongodbOutputReference</a>

---

##### `mongodbatlas`<sup>Required</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlas"></a>

```typescript
public readonly mongodbatlas: DatabaseSecretBackendConnectionMongodbatlasOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference">DatabaseSecretBackendConnectionMongodbatlasOutputReference</a>

---

##### `mssql`<sup>Required</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssql"></a>

```typescript
public readonly mssql: DatabaseSecretBackendConnectionMssqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference">DatabaseSecretBackendConnectionMssqlOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysql"></a>

```typescript
public readonly mysql: DatabaseSecretBackendConnectionMysqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference">DatabaseSecretBackendConnectionMysqlOutputReference</a>

---

##### `mysqlAurora`<sup>Required</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAurora"></a>

```typescript
public readonly mysqlAurora: DatabaseSecretBackendConnectionMysqlAuroraOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference">DatabaseSecretBackendConnectionMysqlAuroraOutputReference</a>

---

##### `mysqlLegacy`<sup>Required</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacy"></a>

```typescript
public readonly mysqlLegacy: DatabaseSecretBackendConnectionMysqlLegacyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference">DatabaseSecretBackendConnectionMysqlLegacyOutputReference</a>

---

##### `mysqlRds`<sup>Required</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRds"></a>

```typescript
public readonly mysqlRds: DatabaseSecretBackendConnectionMysqlRdsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference">DatabaseSecretBackendConnectionMysqlRdsOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracle"></a>

```typescript
public readonly oracle: DatabaseSecretBackendConnectionOracleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference">DatabaseSecretBackendConnectionOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresql"></a>

```typescript
public readonly postgresql: DatabaseSecretBackendConnectionPostgresqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference">DatabaseSecretBackendConnectionPostgresqlOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redis"></a>

```typescript
public readonly redis: DatabaseSecretBackendConnectionRedisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference">DatabaseSecretBackendConnectionRedisOutputReference</a>

---

##### `redisElasticache`<sup>Required</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticache"></a>

```typescript
public readonly redisElasticache: DatabaseSecretBackendConnectionRedisElasticacheOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference">DatabaseSecretBackendConnectionRedisElasticacheOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshift"></a>

```typescript
public readonly redshift: DatabaseSecretBackendConnectionRedshiftOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference">DatabaseSecretBackendConnectionRedshiftOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflake"></a>

```typescript
public readonly snowflake: DatabaseSecretBackendConnectionSnowflakeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference">DatabaseSecretBackendConnectionSnowflakeOutputReference</a>

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `cassandraInput`<sup>Optional</sup> <a name="cassandraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.cassandraInput"></a>

```typescript
public readonly cassandraInput: DatabaseSecretBackendConnectionCassandra;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---

##### `couchbaseInput`<sup>Optional</sup> <a name="couchbaseInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.couchbaseInput"></a>

```typescript
public readonly couchbaseInput: DatabaseSecretBackendConnectionCouchbase;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `elasticsearchInput`<sup>Optional</sup> <a name="elasticsearchInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.elasticsearchInput"></a>

```typescript
public readonly elasticsearchInput: DatabaseSecretBackendConnectionElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---

##### `hanaInput`<sup>Optional</sup> <a name="hanaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.hanaInput"></a>

```typescript
public readonly hanaInput: DatabaseSecretBackendConnectionHana;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `influxdbInput`<sup>Optional</sup> <a name="influxdbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.influxdbInput"></a>

```typescript
public readonly influxdbInput: DatabaseSecretBackendConnectionInfluxdb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---

##### `mongodbatlasInput`<sup>Optional</sup> <a name="mongodbatlasInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbatlasInput"></a>

```typescript
public readonly mongodbatlasInput: DatabaseSecretBackendConnectionMongodbatlas;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---

##### `mongodbInput`<sup>Optional</sup> <a name="mongodbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mongodbInput"></a>

```typescript
public readonly mongodbInput: DatabaseSecretBackendConnectionMongodb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---

##### `mssqlInput`<sup>Optional</sup> <a name="mssqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mssqlInput"></a>

```typescript
public readonly mssqlInput: DatabaseSecretBackendConnectionMssql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---

##### `mysqlAuroraInput`<sup>Optional</sup> <a name="mysqlAuroraInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlAuroraInput"></a>

```typescript
public readonly mysqlAuroraInput: DatabaseSecretBackendConnectionMysqlAurora;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlInput"></a>

```typescript
public readonly mysqlInput: DatabaseSecretBackendConnectionMysql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---

##### `mysqlLegacyInput`<sup>Optional</sup> <a name="mysqlLegacyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlLegacyInput"></a>

```typescript
public readonly mysqlLegacyInput: DatabaseSecretBackendConnectionMysqlLegacy;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---

##### `mysqlRdsInput`<sup>Optional</sup> <a name="mysqlRdsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.mysqlRdsInput"></a>

```typescript
public readonly mysqlRdsInput: DatabaseSecretBackendConnectionMysqlRds;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.oracleInput"></a>

```typescript
public readonly oracleInput: DatabaseSecretBackendConnectionOracle;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.postgresqlInput"></a>

```typescript
public readonly postgresqlInput: DatabaseSecretBackendConnectionPostgresql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---

##### `redisElasticacheInput`<sup>Optional</sup> <a name="redisElasticacheInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisElasticacheInput"></a>

```typescript
public readonly redisElasticacheInput: DatabaseSecretBackendConnectionRedisElasticache;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---

##### `redisInput`<sup>Optional</sup> <a name="redisInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redisInput"></a>

```typescript
public readonly redisInput: DatabaseSecretBackendConnectionRedis;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.redshiftInput"></a>

```typescript
public readonly redshiftInput: DatabaseSecretBackendConnectionRedshift;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---

##### `rootRotationStatementsInput`<sup>Optional</sup> <a name="rootRotationStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatementsInput"></a>

```typescript
public readonly rootRotationStatementsInput: string[];
```

- *Type:* string[]

---

##### `snowflakeInput`<sup>Optional</sup> <a name="snowflakeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.snowflakeInput"></a>

```typescript
public readonly snowflakeInput: DatabaseSecretBackendConnectionSnowflake;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `rootRotationStatements`<sup>Required</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendConnectionCassandra <a name="DatabaseSecretBackendConnectionCassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionCassandra: databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts">hosts</a></code> | <code>string[]</code> | Cassandra hosts to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password">password</a></code> | <code>string</code> | The password to use when authenticating with Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle">pemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson">pemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion">protocolVersion</a></code> | <code>number</code> | The CQL protocol version to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use TLS when connecting to Cassandra. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username">username</a></code> | <code>string</code> | The username to use when authenticating with Cassandra. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Cassandra hosts to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: number;
```

- *Type:* number

The CQL protocol version to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#protocol_version DatabaseSecretBackendConnection#protocol_version}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use TLS when connecting to Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use when authenticating with Cassandra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionConfig <a name="DatabaseSecretBackendConnectionConfig" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionConfig: databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the Vault mount to configure. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name">name</a></code> | <code>string</code> | Name of the database connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | A list of roles that are allowed to use this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra">cassandra</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | cassandra block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase">couchbase</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | couchbase block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of sensitive data to pass to the endpoint. Useful for templated connection strings. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana">hana</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | hana block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb">influxdb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | influxdb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb">mongodb</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | mongodb block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas">mongodbatlas</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | mongodbatlas block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql">mssql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | mssql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora">mysqlAurora</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | mysql_aurora block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy">mysqlLegacy</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | mysql_legacy block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds">mysqlRds</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | mysql_rds block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the name of the plugin to use for this connection. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache">redisElasticache</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | redis_elasticache block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements">rootRotationStatements</a></code> | <code>string[]</code> | A list of database statements to be executed to rotate the root user's credentials. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the connection is verified during initial configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the Vault mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#backend DatabaseSecretBackendConnection#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#name DatabaseSecretBackendConnection#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

A list of roles that are allowed to use this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#allowed_roles DatabaseSecretBackendConnection#allowed_roles}

---

##### `cassandra`<sup>Optional</sup> <a name="cassandra" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.cassandra"></a>

```typescript
public readonly cassandra: DatabaseSecretBackendConnectionCassandra;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

cassandra block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#cassandra DatabaseSecretBackendConnection#cassandra}

---

##### `couchbase`<sup>Optional</sup> <a name="couchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.couchbase"></a>

```typescript
public readonly couchbase: DatabaseSecretBackendConnectionCouchbase;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

couchbase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#couchbase DatabaseSecretBackendConnection#couchbase}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of sensitive data to pass to the endpoint. Useful for templated connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#data DatabaseSecretBackendConnection#data}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: DatabaseSecretBackendConnectionElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#elasticsearch DatabaseSecretBackendConnection#elasticsearch}

---

##### `hana`<sup>Optional</sup> <a name="hana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.hana"></a>

```typescript
public readonly hana: DatabaseSecretBackendConnectionHana;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

hana block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#hana DatabaseSecretBackendConnection#hana}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#id DatabaseSecretBackendConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `influxdb`<sup>Optional</sup> <a name="influxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.influxdb"></a>

```typescript
public readonly influxdb: DatabaseSecretBackendConnectionInfluxdb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

influxdb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#influxdb DatabaseSecretBackendConnection#influxdb}

---

##### `mongodb`<sup>Optional</sup> <a name="mongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodb"></a>

```typescript
public readonly mongodb: DatabaseSecretBackendConnectionMongodb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

mongodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mongodb DatabaseSecretBackendConnection#mongodb}

---

##### `mongodbatlas`<sup>Optional</sup> <a name="mongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mongodbatlas"></a>

```typescript
public readonly mongodbatlas: DatabaseSecretBackendConnectionMongodbatlas;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

mongodbatlas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mongodbatlas DatabaseSecretBackendConnection#mongodbatlas}

---

##### `mssql`<sup>Optional</sup> <a name="mssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mssql"></a>

```typescript
public readonly mssql: DatabaseSecretBackendConnectionMssql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

mssql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mssql DatabaseSecretBackendConnection#mssql}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysql"></a>

```typescript
public readonly mysql: DatabaseSecretBackendConnectionMysql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mysql DatabaseSecretBackendConnection#mysql}

---

##### `mysqlAurora`<sup>Optional</sup> <a name="mysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlAurora"></a>

```typescript
public readonly mysqlAurora: DatabaseSecretBackendConnectionMysqlAurora;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

mysql_aurora block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mysql_aurora DatabaseSecretBackendConnection#mysql_aurora}

---

##### `mysqlLegacy`<sup>Optional</sup> <a name="mysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlLegacy"></a>

```typescript
public readonly mysqlLegacy: DatabaseSecretBackendConnectionMysqlLegacy;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

mysql_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mysql_legacy DatabaseSecretBackendConnection#mysql_legacy}

---

##### `mysqlRds`<sup>Optional</sup> <a name="mysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.mysqlRds"></a>

```typescript
public readonly mysqlRds: DatabaseSecretBackendConnectionMysqlRds;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

mysql_rds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#mysql_rds DatabaseSecretBackendConnection#mysql_rds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#namespace DatabaseSecretBackendConnection#namespace}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.oracle"></a>

```typescript
public readonly oracle: DatabaseSecretBackendConnectionOracle;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#oracle DatabaseSecretBackendConnection#oracle}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the name of the plugin to use for this connection.

Must be prefixed with the name of one of the supported database engine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#plugin_name DatabaseSecretBackendConnection#plugin_name}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.postgresql"></a>

```typescript
public readonly postgresql: DatabaseSecretBackendConnectionPostgresql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#postgresql DatabaseSecretBackendConnection#postgresql}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redis"></a>

```typescript
public readonly redis: DatabaseSecretBackendConnectionRedis;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#redis DatabaseSecretBackendConnection#redis}

---

##### `redisElasticache`<sup>Optional</sup> <a name="redisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redisElasticache"></a>

```typescript
public readonly redisElasticache: DatabaseSecretBackendConnectionRedisElasticache;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

redis_elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#redis_elasticache DatabaseSecretBackendConnection#redis_elasticache}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.redshift"></a>

```typescript
public readonly redshift: DatabaseSecretBackendConnectionRedshift;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#redshift DatabaseSecretBackendConnection#redshift}

---

##### `rootRotationStatements`<sup>Optional</sup> <a name="rootRotationStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.rootRotationStatements"></a>

```typescript
public readonly rootRotationStatements: string[];
```

- *Type:* string[]

A list of database statements to be executed to rotate the root user's credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#root_rotation_statements DatabaseSecretBackendConnection#root_rotation_statements}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.snowflake"></a>

```typescript
public readonly snowflake: DatabaseSecretBackendConnectionSnowflake;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#snowflake DatabaseSecretBackendConnection#snowflake}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionConfig.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the connection is verified during initial configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#verify_connection DatabaseSecretBackendConnection#verify_connection}

---

### DatabaseSecretBackendConnectionCouchbase <a name="DatabaseSecretBackendConnectionCouchbase" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionCouchbase: databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts">hosts</a></code> | <code>string[]</code> | A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username">username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem">base64Pem</a></code> | <code>string</code> | Required if `tls` is `true`. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName">bucketName</a></code> | <code>string</code> | Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Couchbase. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#hosts DatabaseSecretBackendConnection#hosts}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `base64Pem`<sup>Optional</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.base64Pem"></a>

```typescript
public readonly base64Pem: string;
```

- *Type:* string

Required if `tls` is `true`.

Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#base64_pem DatabaseSecretBackendConnection#base64_pem}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#bucket_name DatabaseSecretBackendConnection#bucket_name}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to use TLS when connecting to Couchbase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionElasticsearch <a name="DatabaseSecretBackendConnectionElasticsearch" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionElasticsearch: databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password">password</a></code> | <code>string</code> | The password to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url">url</a></code> | <code>string</code> | The URL for Elasticsearch's API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username">username</a></code> | <code>string</code> | The username to be used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert">caCert</a></code> | <code>string</code> | The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath">caPath</a></code> | <code>string</code> | The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert">clientCert</a></code> | <code>string</code> | The path to the certificate for the Elasticsearch client to present for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey">clientKey</a></code> | <code>string</code> | The path to the key for the Elasticsearch client to use for communication. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable certificate verification. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | This, if set, is used to set the SNI host when connecting via TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for Elasticsearch's API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to be used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#ca_path DatabaseSecretBackendConnection#ca_path}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

The path to the certificate for the Elasticsearch client to present for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#client_cert DatabaseSecretBackendConnection#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The path to the key for the Elasticsearch client to use for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#client_key DatabaseSecretBackendConnection#client_key}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#insecure DatabaseSecretBackendConnection#insecure}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

This, if set, is used to set the SNI host when connecting via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_server_name DatabaseSecretBackendConnection#tls_server_name}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionHana <a name="DatabaseSecretBackendConnectionHana" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionHana: databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionInfluxdb <a name="DatabaseSecretBackendConnectionInfluxdb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionInfluxdb: databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host">host</a></code> | <code>string</code> | Influxdb host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username">username</a></code> | <code>string</code> | Specifies the username to use for superuser access. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | The number of seconds to use as a connection timeout. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle">pemBundle</a></code> | <code>string</code> | Concatenated PEM blocks containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson">pemJson</a></code> | <code>string</code> | Specifies JSON containing a certificate and private key; |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use TLS when connecting to Influxdb. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Influxdb host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username to use for superuser access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

The number of seconds to use as a connection timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connect_timeout DatabaseSecretBackendConnection#connect_timeout}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `pemBundle`<sup>Optional</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

Concatenated PEM blocks containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#pem_bundle DatabaseSecretBackendConnection#pem_bundle}

---

##### `pemJson`<sup>Optional</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

Specifies JSON containing a certificate and private key;

a certificate, private key, and issuing CA certificate; or just a CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#pem_json DatabaseSecretBackendConnection#pem_json}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use TLS when connecting to Influxdb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodb <a name="DatabaseSecretBackendConnectionMongodb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMongodb: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMongodbatlas <a name="DatabaseSecretBackendConnectionMongodbatlas" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMongodbatlas: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey">privateKey</a></code> | <code>string</code> | The Private Programmatic API Key used to connect with MongoDB Atlas API. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId">projectId</a></code> | <code>string</code> | The Project ID the Database User should be created within. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey">publicKey</a></code> | <code>string</code> | The Public Programmatic API Key used to authenticate with the MongoDB Atlas API. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The Private Programmatic API Key used to connect with MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#private_key DatabaseSecretBackendConnection#private_key}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The Project ID the Database User should be created within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#project_id DatabaseSecretBackendConnection#project_id}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#public_key DatabaseSecretBackendConnection#public_key}

---

### DatabaseSecretBackendConnectionMssql <a name="DatabaseSecretBackendConnectionMssql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMssql: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb">containedDb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true when the target is a Contained Database, e.g. AzureSQL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `containedDb`<sup>Optional</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.containedDb"></a>

```typescript
public readonly containedDb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true when the target is a Contained Database, e.g. AzureSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#contained_db DatabaseSecretBackendConnection#contained_db}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysql <a name="DatabaseSecretBackendConnectionMysql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMysql: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType">authType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa">tlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlAurora <a name="DatabaseSecretBackendConnectionMysqlAurora" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMysqlAurora: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.authType">authType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCa">tlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlLegacy <a name="DatabaseSecretBackendConnectionMysqlLegacy" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMysqlLegacy: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.authType">authType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCa">tlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionMysqlRds <a name="DatabaseSecretBackendConnectionMysqlRds" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionMysqlRds: databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.authType">authType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCa">tlsCa</a></code> | <code>string</code> | x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | x509 certificate for connecting to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `tlsCa`<sup>Optional</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_ca DatabaseSecretBackendConnection#tls_ca}

---

##### `tlsCertificateKey`<sup>Optional</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

x509 certificate for connecting to the database.

This must be a PEM encoded version of the private key and the certificate combined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls_certificate_key DatabaseSecretBackendConnection#tls_certificate_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionOracle <a name="DatabaseSecretBackendConnectionOracle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionOracle: databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.disconnectSessions">disconnectSessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to disconnect any open sessions prior to running the revocation statements. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.splitStatements">splitStatements</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true in order to split statements after semi-colons. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disconnectSessions`<sup>Optional</sup> <a name="disconnectSessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.disconnectSessions"></a>

```typescript
public readonly disconnectSessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to disconnect any open sessions prior to running the revocation statements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#disconnect_sessions DatabaseSecretBackendConnection#disconnect_sessions}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `splitStatements`<sup>Optional</sup> <a name="splitStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.splitStatements"></a>

```typescript
public readonly splitStatements: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true in order to split statements after semi-colons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#split_statements DatabaseSecretBackendConnection#split_statements}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionPostgresql <a name="DatabaseSecretBackendConnectionPostgresql" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionPostgresql: databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType">authType</a></code> | <code>string</code> | Specify alternative authorization type. (Only 'gcp_iam' is valid currently). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | A JSON encoded credential for use with IAM authorization. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Specify alternative authorization type. (Only 'gcp_iam' is valid currently).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#auth_type DatabaseSecretBackendConnection#auth_type}

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `serviceAccountJson`<sup>Optional</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

A JSON encoded credential for use with IAM authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#service_account_json DatabaseSecretBackendConnection#service_account_json}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionRedis <a name="DatabaseSecretBackendConnectionRedis" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionRedis: databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host">host</a></code> | <code>string</code> | Specifies the host to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password">password</a></code> | <code>string</code> | Specifies the password corresponding to the given username. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username">username</a></code> | <code>string</code> | Specifies the username for Vault to use. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert">caCert</a></code> | <code>string</code> | The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to skip verification of the server certificate when using TLS. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port">port</a></code> | <code>number</code> | The transport port to use to connect to Redis. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to use TLS when connecting to Redis. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Specifies the host to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#host DatabaseSecretBackendConnection#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the password corresponding to the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the username for Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

The contents of a PEM-encoded CA cert file to use to verify the Redis server's identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#ca_cert DatabaseSecretBackendConnection#ca_cert}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to skip verification of the server certificate when using TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#insecure_tls DatabaseSecretBackendConnection#insecure_tls}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The transport port to use to connect to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#port DatabaseSecretBackendConnection#port}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to use TLS when connecting to Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#tls DatabaseSecretBackendConnection#tls}

---

### DatabaseSecretBackendConnectionRedisElasticache <a name="DatabaseSecretBackendConnectionRedisElasticache" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionRedisElasticache: databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url">url</a></code> | <code>string</code> | The configuration endpoint for the ElastiCache cluster to connect to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password">password</a></code> | <code>string</code> | The AWS secret key id to use to talk to ElastiCache. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region">region</a></code> | <code>string</code> | The AWS region where the ElastiCache cluster is hosted. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username">username</a></code> | <code>string</code> | The AWS access key id to use to talk to ElastiCache. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The configuration endpoint for the ElastiCache cluster to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#url DatabaseSecretBackendConnection#url}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The AWS secret key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region where the ElastiCache cluster is hosted.

If omitted the plugin tries to infer the region from the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#region DatabaseSecretBackendConnection#region}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The AWS access key id to use to talk to ElastiCache.

If omitted the credentials chain provider is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

### DatabaseSecretBackendConnectionRedshift <a name="DatabaseSecretBackendConnectionRedshift" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionRedshift: databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable special character escaping in username and password. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `disableEscaping`<sup>Optional</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable special character escaping in username and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#disable_escaping DatabaseSecretBackendConnection#disable_escaping}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

### DatabaseSecretBackendConnectionSnowflake <a name="DatabaseSecretBackendConnectionSnowflake" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

const databaseSecretBackendConnectionSnowflake: databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Connection string to use to connect to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | Maximum number of seconds a connection may be reused. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | Maximum number of idle connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | Maximum number of open connections to the database. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password">password</a></code> | <code>string</code> | The root credential password used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username">username</a></code> | <code>string</code> | The root credential username used in the connection URL. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Username generation template. |

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Connection string to use to connect to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#connection_url DatabaseSecretBackendConnection#connection_url}

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

Maximum number of seconds a connection may be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_connection_lifetime DatabaseSecretBackendConnection#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

Maximum number of idle connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_idle_connections DatabaseSecretBackendConnection#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

Maximum number of open connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#max_open_connections DatabaseSecretBackendConnection#max_open_connections}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The root credential password used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#password DatabaseSecretBackendConnection#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The root credential username used in the connection URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username DatabaseSecretBackendConnection#username}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Username generation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/database_secret_backend_connection#username_template DatabaseSecretBackendConnection#username_template}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSecretBackendConnectionCassandraOutputReference <a name="DatabaseSecretBackendConnectionCassandraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle">resetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson">resetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemBundle"></a>

```typescript
public resetPemBundle(): void
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPemJson"></a>

```typescript
public resetPemJson(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle">pemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson">pemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundleInput"></a>

```typescript
public readonly pemBundleInput: string;
```

- *Type:* string

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJsonInput"></a>

```typescript
public readonly pemJsonInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: number;
```

- *Type:* number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: number;
```

- *Type:* number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionCassandra;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCassandra">DatabaseSecretBackendConnectionCassandra</a>

---


### DatabaseSecretBackendConnectionCouchbaseOutputReference <a name="DatabaseSecretBackendConnectionCouchbaseOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem">resetBase64Pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase64Pem` <a name="resetBase64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBase64Pem"></a>

```typescript
public resetBase64Pem(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput">base64PemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem">base64Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base64PemInput`<sup>Optional</sup> <a name="base64PemInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64PemInput"></a>

```typescript
public readonly base64PemInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `base64Pem`<sup>Required</sup> <a name="base64Pem" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.base64Pem"></a>

```typescript
public readonly base64Pem: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionCouchbase;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionCouchbase">DatabaseSecretBackendConnectionCouchbase</a>

---


### DatabaseSecretBackendConnectionElasticsearchOutputReference <a name="DatabaseSecretBackendConnectionElasticsearchOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath">resetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetCaPath` <a name="resetCaPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetCaPath"></a>

```typescript
public resetCaPath(): void
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientCert"></a>

```typescript
public resetClientCert(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetTlsServerName"></a>

```typescript
public resetTlsServerName(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput">caPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput">clientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath">caPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert">clientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `caPathInput`<sup>Optional</sup> <a name="caPathInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPathInput"></a>

```typescript
public readonly caPathInput: string;
```

- *Type:* string

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCertInput"></a>

```typescript
public readonly clientCertInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerNameInput"></a>

```typescript
public readonly tlsServerNameInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `caPath`<sup>Required</sup> <a name="caPath" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientCert"></a>

```typescript
public readonly clientCert: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `tlsServerName`<sup>Required</sup> <a name="tlsServerName" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionElasticsearch;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionElasticsearch">DatabaseSecretBackendConnectionElasticsearch</a>

---


### DatabaseSecretBackendConnectionHanaOutputReference <a name="DatabaseSecretBackendConnectionHanaOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionHana;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionHana">DatabaseSecretBackendConnectionHana</a>

---


### DatabaseSecretBackendConnectionInfluxdbOutputReference <a name="DatabaseSecretBackendConnectionInfluxdbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle">resetPemBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson">resetPemJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPemBundle` <a name="resetPemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemBundle"></a>

```typescript
public resetPemBundle(): void
```

##### `resetPemJson` <a name="resetPemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPemJson"></a>

```typescript
public resetPemJson(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput">pemBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput">pemJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle">pemBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson">pemJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pemBundleInput`<sup>Optional</sup> <a name="pemBundleInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundleInput"></a>

```typescript
public readonly pemBundleInput: string;
```

- *Type:* string

---

##### `pemJsonInput`<sup>Optional</sup> <a name="pemJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJsonInput"></a>

```typescript
public readonly pemJsonInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pemBundle`<sup>Required</sup> <a name="pemBundle" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemBundle"></a>

```typescript
public readonly pemBundle: string;
```

- *Type:* string

---

##### `pemJson`<sup>Required</sup> <a name="pemJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.pemJson"></a>

```typescript
public readonly pemJson: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionInfluxdb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionInfluxdb">DatabaseSecretBackendConnectionInfluxdb</a>

---


### DatabaseSecretBackendConnectionMongodbatlasOutputReference <a name="DatabaseSecretBackendConnectionMongodbatlasOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMongodbatlas;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbatlas">DatabaseSecretBackendConnectionMongodbatlas</a>

---


### DatabaseSecretBackendConnectionMongodbOutputReference <a name="DatabaseSecretBackendConnectionMongodbOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMongodb;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMongodb">DatabaseSecretBackendConnectionMongodb</a>

---


### DatabaseSecretBackendConnectionMssqlOutputReference <a name="DatabaseSecretBackendConnectionMssqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb">resetContainedDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetContainedDb` <a name="resetContainedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetContainedDb"></a>

```typescript
public resetContainedDb(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput">containedDbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb">containedDb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `containedDbInput`<sup>Optional</sup> <a name="containedDbInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDbInput"></a>

```typescript
public readonly containedDbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `containedDb`<sup>Required</sup> <a name="containedDb" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.containedDb"></a>

```typescript
public readonly containedDb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMssql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMssql">DatabaseSecretBackendConnectionMssql</a>

---


### DatabaseSecretBackendConnectionMysqlAuroraOutputReference <a name="DatabaseSecretBackendConnectionMysqlAuroraOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetServiceAccountJson">resetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCa">resetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCertificateKey">resetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetServiceAccountJson"></a>

```typescript
public resetServiceAccountJson(): void
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCa"></a>

```typescript
public resetTlsCa(): void
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetTlsCertificateKey"></a>

```typescript
public resetTlsCertificateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCa">tlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJsonInput"></a>

```typescript
public readonly serviceAccountJsonInput: string;
```

- *Type:* string

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCaInput"></a>

```typescript
public readonly tlsCaInput: string;
```

- *Type:* string

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKeyInput"></a>

```typescript
public readonly tlsCertificateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAuroraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMysqlAurora;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlAurora">DatabaseSecretBackendConnectionMysqlAurora</a>

---


### DatabaseSecretBackendConnectionMysqlLegacyOutputReference <a name="DatabaseSecretBackendConnectionMysqlLegacyOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetServiceAccountJson">resetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCa">resetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCertificateKey">resetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetServiceAccountJson"></a>

```typescript
public resetServiceAccountJson(): void
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCa"></a>

```typescript
public resetTlsCa(): void
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetTlsCertificateKey"></a>

```typescript
public resetTlsCertificateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCa">tlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJsonInput"></a>

```typescript
public readonly serviceAccountJsonInput: string;
```

- *Type:* string

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCaInput"></a>

```typescript
public readonly tlsCaInput: string;
```

- *Type:* string

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKeyInput"></a>

```typescript
public readonly tlsCertificateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMysqlLegacy;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlLegacy">DatabaseSecretBackendConnectionMysqlLegacy</a>

---


### DatabaseSecretBackendConnectionMysqlOutputReference <a name="DatabaseSecretBackendConnectionMysqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson">resetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa">resetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey">resetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetServiceAccountJson"></a>

```typescript
public resetServiceAccountJson(): void
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCa"></a>

```typescript
public resetTlsCa(): void
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetTlsCertificateKey"></a>

```typescript
public resetTlsCertificateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa">tlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJsonInput"></a>

```typescript
public readonly serviceAccountJsonInput: string;
```

- *Type:* string

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCaInput"></a>

```typescript
public readonly tlsCaInput: string;
```

- *Type:* string

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKeyInput"></a>

```typescript
public readonly tlsCertificateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMysql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysql">DatabaseSecretBackendConnectionMysql</a>

---


### DatabaseSecretBackendConnectionMysqlRdsOutputReference <a name="DatabaseSecretBackendConnectionMysqlRdsOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetServiceAccountJson">resetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCa">resetTlsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCertificateKey">resetTlsCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetServiceAccountJson"></a>

```typescript
public resetServiceAccountJson(): void
```

##### `resetTlsCa` <a name="resetTlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCa"></a>

```typescript
public resetTlsCa(): void
```

##### `resetTlsCertificateKey` <a name="resetTlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetTlsCertificateKey"></a>

```typescript
public resetTlsCertificateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCaInput">tlsCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKeyInput">tlsCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCa">tlsCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKey">tlsCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJsonInput"></a>

```typescript
public readonly serviceAccountJsonInput: string;
```

- *Type:* string

---

##### `tlsCaInput`<sup>Optional</sup> <a name="tlsCaInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCaInput"></a>

```typescript
public readonly tlsCaInput: string;
```

- *Type:* string

---

##### `tlsCertificateKeyInput`<sup>Optional</sup> <a name="tlsCertificateKeyInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKeyInput"></a>

```typescript
public readonly tlsCertificateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

---

##### `tlsCa`<sup>Required</sup> <a name="tlsCa" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCa"></a>

```typescript
public readonly tlsCa: string;
```

- *Type:* string

---

##### `tlsCertificateKey`<sup>Required</sup> <a name="tlsCertificateKey" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.tlsCertificateKey"></a>

```typescript
public readonly tlsCertificateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionMysqlRds;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionMysqlRds">DatabaseSecretBackendConnectionMysqlRds</a>

---


### DatabaseSecretBackendConnectionOracleOutputReference <a name="DatabaseSecretBackendConnectionOracleOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetDisconnectSessions">resetDisconnectSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetSplitStatements">resetSplitStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetDisconnectSessions` <a name="resetDisconnectSessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetDisconnectSessions"></a>

```typescript
public resetDisconnectSessions(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSplitStatements` <a name="resetSplitStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetSplitStatements"></a>

```typescript
public resetSplitStatements(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessionsInput">disconnectSessionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatementsInput">splitStatementsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessions">disconnectSessions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatements">splitStatements</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `disconnectSessionsInput`<sup>Optional</sup> <a name="disconnectSessionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessionsInput"></a>

```typescript
public readonly disconnectSessionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `splitStatementsInput`<sup>Optional</sup> <a name="splitStatementsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatementsInput"></a>

```typescript
public readonly splitStatementsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `disconnectSessions`<sup>Required</sup> <a name="disconnectSessions" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.disconnectSessions"></a>

```typescript
public readonly disconnectSessions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `splitStatements`<sup>Required</sup> <a name="splitStatements" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.splitStatements"></a>

```typescript
public readonly splitStatements: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionOracle;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionOracle">DatabaseSecretBackendConnectionOracle</a>

---


### DatabaseSecretBackendConnectionPostgresqlOutputReference <a name="DatabaseSecretBackendConnectionPostgresqlOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson">resetServiceAccountJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceAccountJson` <a name="resetServiceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetServiceAccountJson"></a>

```typescript
public resetServiceAccountJson(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput">serviceAccountJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson">serviceAccountJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceAccountJsonInput`<sup>Optional</sup> <a name="serviceAccountJsonInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJsonInput"></a>

```typescript
public readonly serviceAccountJsonInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceAccountJson`<sup>Required</sup> <a name="serviceAccountJson" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.serviceAccountJson"></a>

```typescript
public readonly serviceAccountJson: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionPostgresql;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionPostgresql">DatabaseSecretBackendConnectionPostgresql</a>

---


### DatabaseSecretBackendConnectionRedisElasticacheOutputReference <a name="DatabaseSecretBackendConnectionRedisElasticacheOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionRedisElasticache;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisElasticache">DatabaseSecretBackendConnectionRedisElasticache</a>

---


### DatabaseSecretBackendConnectionRedisOutputReference <a name="DatabaseSecretBackendConnectionRedisOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionRedis;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedis">DatabaseSecretBackendConnectionRedis</a>

---


### DatabaseSecretBackendConnectionRedshiftOutputReference <a name="DatabaseSecretBackendConnectionRedshiftOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping">resetDisableEscaping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetDisableEscaping` <a name="resetDisableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetDisableEscaping"></a>

```typescript
public resetDisableEscaping(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput">disableEscapingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping">disableEscaping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `disableEscapingInput`<sup>Optional</sup> <a name="disableEscapingInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscapingInput"></a>

```typescript
public readonly disableEscapingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `disableEscaping`<sup>Required</sup> <a name="disableEscaping" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.disableEscaping"></a>

```typescript
public readonly disableEscaping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionRedshift;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionRedshift">DatabaseSecretBackendConnectionRedshift</a>

---


### DatabaseSecretBackendConnectionSnowflakeOutputReference <a name="DatabaseSecretBackendConnectionSnowflakeOutputReference" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer"></a>

```typescript
import { databaseSecretBackendConnection } from '@cdktf/provider-vault'

new databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflakeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseSecretBackendConnectionSnowflake;
```

- *Type:* <a href="#@cdktf/provider-vault.databaseSecretBackendConnection.DatabaseSecretBackendConnectionSnowflake">DatabaseSecretBackendConnectionSnowflake</a>

---



